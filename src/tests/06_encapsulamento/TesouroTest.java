import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.lang.reflect.*;
import java.util.*;

public class TesouroTest {
    private Class<?> tesouroClass;
    private Object tesouroInstance;

    @BeforeEach
    void setUp() throws Exception {
        try {
            // Tenta carregar a classe Tesouro. 
            // Se o aluno colocou em um pacote, o nome deve ser ajustado (ex: "pacote.Tesouro")
            tesouroClass = Class.forName("Tesouro");
            
            // Tenta instanciar usando o construtor padrão. 
            // Se houver apenas construtores com argumentos, tenta o primeiro disponível.
            Constructor<?>[] constructors = tesouroClass.getDeclaredConstructors();
            if (constructors.length > 0) {
                Constructor<?> constructor = constructors[0];
                constructor.setAccessible(true);
                
                // Cria argumentos básicos se o construtor exigir (ex: strings ou ints)
                Object[] args = new Object[constructor.getParameterCount()];
                Class<?>[] paramTypes = constructor.getParameterTypes();
                for (int i = 0; i < paramTypes.length; i++) {
                    if (paramTypes[i] == int.class) args[i] = 0;
                    else if (paramTypes[i] == double.class) args[i] = 0.0;
                    else if (paramTypes[i] == String.class) args[i] = "Teste";
                    else args[i] = null;
                }
                tesouroInstance = constructor.newInstance(args);
            }
        } catch (ClassNotFoundException e) {
            fail("A classe Tesouro não foi encontrada. Verifique se o nome da classe está correto.");
        } catch (Exception e) {
            fail("Erro ao instanciar a classe Tesouro: " + e.getMessage());
        }
    }

    @Test
    void testAtributosPrivados() {
        String[] atributosObrigatorios = {"quantidadeOuro", "quantidadeDiamantes"};
        
        for (String attr : atributosObrigatorios) {
            try {
                Field field = tesouroClass.getDeclaredField(attr);
                assertTrue(Modifier.isPrivate(field.getModifiers()), 
                    "O atributo " + attr + " deve ser privado (private).");
            } catch (NoSuchFieldException e) {
                fail("O atributo obrigatório " + attr + " não foi encontrado na classe.");
            }
        }
    }

    @Test
    void testMetodoDepositarOuro() throws Exception {
        Method method = findMethod("depositarOuro", int.class);
        assertNotNull(method, "O método depositarOuro(int) não foi implementado.");

        // Teste de valor positivo
        int valorPositivo = 100;
        method.invoke(tesouroInstance, valorPositivo);
        
        int saldoPos = getPrivateIntField("quantidadeOuro");
        assertTrue(saldoPos >= valorPositivo, "O saldo de ouro deveria ter aumentado após depósito positivo.");

        // Teste de valor negativo/zero (não deve alterar saldo)
        int saldoAntes = getPrivateIntField("quantidadeOuro");
        method.invoke(tesouroInstance, -50);
        int saldoDepois = getPrivateIntField("quantidadeOuro");
        assertEquals(saldoAntes, saldoDepois, "O saldo de ouro não deve mudar com depósito negativo ou zero.");
    }

    @Test
    void testMetodoSacarOuro() throws Exception {
        Method method = findMethod("sacarOuro", int.class);
        assertNotNull(method, "O método sacarOuro(int) não foi implementado.");

        // Garante saldo para o saque
        setPrivateIntField("quantidadeOuro", 500);

        // Saque válido
        method.invoke(tesouroInstance, 200);
        assertEquals(300, getPrivateIntField("quantidadeOuro"), "O saldo de ouro deveria ter diminuído após saque válido.");

        // Saque inválido (excede saldo)
        int saldoAtual = getPrivateIntField("quantidadeOuro");
        method.invoke(tesouroInstance, 1000);
        assertEquals(saldoAtual, getPrivateIntField("quantidadeOuro"), "O saldo de ouro não deve diminuir se o valor do saque exceder o saldo.");
    }

    @Test
    void testMetodoAdicionarDiamantes() throws Exception {
        Method method = findMethod("adicionarDiamantes", int.class);
        assertNotNull(method, "O método adicionarDiamantes(int) não foi implementado.");

        method.invoke(tesouroInstance, 10);
        assertTrue(getPrivateIntField("quantidadeDiamantes") >= 10, "A quantidade de diamantes deveria ter aumentado.");
    }

    @Test
    void testNaoExisteSaqueDiamantes() {
        Method[] methods = tesouroClass.getDeclaredMethods();
        for (Method m : methods) {
            if (m.getName().toLowerCase().contains("sacar") && 
                m.getName().toLowerCase().contains("diamante")) {
                fail("A classe não deve possuir métodos para sacar diamantes!");
            }
        }
    }

    @Test
    void testMetodoExibicao() {
        boolean temToString = tesouroClass.getMethod("toString") != null;
        boolean temExibirInventario = false;
        try {
            tesouroClass.getDeclaredMethod("exibirInventario");
            temExibirInventario = true;
        } catch (NoSuchMethodException e) {
            // Não tem
        }
        
        assertTrue(temToString || temExibirInventario, 
            "A classe deve implementar toString() ou exibirInventario() para mostrar a riqueza.");
    }

    // --- Métodos Auxiliares de Reflexão ---

    private Method findMethod(String name, Class<?>... paramTypes) {
        try {
            return tesouroClass.getDeclaredMethod(name, paramTypes);
        } catch (NoSuchMethodException e) {
            return null;
        }
    }

    private int getPrivateIntField(String name) {
        try {
            Field field = tesouroClass.getDeclaredField(name);
            field.setAccessible(true);
            return field.getInt(tesouroInstance);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao acessar campo privado: " + name, e);
        }
    }

    private void setPrivateIntField(String name, int value) {
        try {
            Field field = tesouroClass.getDeclaredField(name);
            field.setAccessible(true);
            field.setInt(tesouroInstance, value);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao setar campo privado: " + name, e);
        }
    }
}
