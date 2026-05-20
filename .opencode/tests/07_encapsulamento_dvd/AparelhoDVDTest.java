import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;
import java.lang.reflect.*;

public class AparelhoDVDTest {
    private Class<?> dvdClass;
    private Object dvdInstance;

    @BeforeEach
    void setUp() throws Exception {
        try {
            dvdClass = Class.forName("AparelhoDVD");
            Constructor<?>[] constructors = dvdClass.getDeclaredConstructors();
            if (constructors.length > 0) {
                Constructor<?> constructor = constructors[0];
                constructor.setAccessible(true);
                Object[] args = new Object[constructor.getParameterCount()];
                Class<?>[] paramTypes = constructor.getParameterTypes();
                for (int i = 0; i < paramTypes.length; i++) {
                    if (paramTypes[i] == int.class) args[i] = 0;
                    else if (paramTypes[i] == double.class) args[i] = 0.0;
                    else if (paramTypes[i] == String.class) args[i] = "Teste";
                    else args[i] = null;
                }
                dvdInstance = constructor.newInstance(args);
            }
        } catch (ClassNotFoundException e) {
            fail("A classe AparelhoDVD não foi encontrada. Verifique se o nome da classe está correto.");
        } catch (Exception e) {
            fail("Erro ao instanciar a classe AparelhoDVD: " + e.getMessage());
        }
    }

    @Test
    void testAtributosPrivados() {
        String[] atributosObrigatorios = {"ligado", "volume", "filme", "tocando"};
        for (String attr : atributosObrigatorios) {
            try {
                Field field = dvdClass.getDeclaredField(attr);
                assertTrue(Modifier.isPrivate(field.getModifiers()),
                    "O atributo " + attr + " deve ser privado (private).");
            } catch (NoSuchFieldException e) {
                fail("O atributo obrigatório " + attr + " não foi encontrado na classe.");
            }
        }
    }

    @Test
    void testEstadoInicial() throws Exception {
        boolean ligado = getPrivateBooleanField("ligado");
        assertFalse(ligado, "O aparelho deve iniciar desligado.");

        int volume = getPrivateIntField("volume");
        assertEquals(2, volume, "O volume inicial deve ser 2.");
    }

    @Test
    void testLigarDesligar() throws Exception {
        Method ligar = findMethod("ligar");
        assertNotNull(ligar, "O método ligar() não foi implementado.");
        ligar.invoke(dvdInstance);
        assertTrue(getPrivateBooleanField("ligado"), "Após ligar(), o aparelho deve estar ligado.");

        Method desligar = findMethod("desligar");
        assertNotNull(desligar, "O método desligar() não foi implementado.");
        desligar.invoke(dvdInstance);
        assertFalse(getPrivateBooleanField("ligado"), "Após desligar(), o aparelho deve estar desligado.");
    }

    @Test
    void testAumentarDiminuirVolume() throws Exception {
        Method ligar = findMethod("ligar");
        ligar.invoke(dvdInstance);

        Method aumentar = findMethod("aumentarVolume");
        assertNotNull(aumentar, "O método aumentarVolume() não foi implementado.");

        for (int i = 0; i < 5; i++) {
            aumentar.invoke(dvdInstance);
        }
        int volume = getPrivateIntField("volume");
        assertTrue(volume <= 5, "O volume não deve ultrapassar 5.");

        Method diminuir = findMethod("diminuirVolume");
        assertNotNull(diminuir, "O método diminuirVolume() não foi implementado.");

        for (int i = 0; i < 5; i++) {
            diminuir.invoke(dvdInstance);
        }
        volume = getPrivateIntField("volume");
        assertTrue(volume >= 1, "O volume não deve ser menor que 1.");
    }

    @Test
    void testOperacoesSoFuncionamLigado() throws Exception {
        Method aumentar = findMethod("aumentarVolume");
        int volumeAntes = getPrivateIntField("volume");
        aumentar.invoke(dvdInstance);
        int volumeDepois = getPrivateIntField("volume");
        assertEquals(volumeAntes, volumeDepois, "Não deve ser possível aumentar volume com o aparelho desligado.");

        Method play = findMethod("play");
        Object resultado = play.invoke(dvdInstance);
        assertNull(resultado, "Não deve ser possível dar play com o aparelho desligado.");
    }

    @Test
    void testInserirRemoverFilme() throws Exception {
        Method ligar = findMethod("ligar");
        ligar.invoke(dvdInstance);

        Class<?> filmeClass = Class.forName("Filme");
        Constructor<?> filmeCtor = filmeClass.getDeclaredConstructors()[0];
        filmeCtor.setAccessible(true);
        Object filme = filmeCtor.newInstance("Matrix", "Ficcao", 150);

        Method inserir = findMethod("inserirFilme", filmeClass);
        assertNotNull(inserir, "O método inserirFilme(Filme) não foi implementado.");
        inserir.invoke(dvdInstance, filme);

        Field filmeField = dvdClass.getDeclaredField("filme");
        filmeField.setAccessible(true);
        assertNotNull(filmeField.get(dvdInstance), "Após inserirFilme, o filme deve estar no aparelho.");

        Method remover = findMethod("removerFilme");
        assertNotNull(remover, "O método removerFilme() não foi implementado.");
        Object removido = remover.invoke(dvdInstance);
        assertNull(filmeField.get(dvdInstance), "Após removerFilme, o filme deve ser removido.");
        assertNotNull(removido, "removerFilme deve retornar o filme removido.");
        assertSame(filme, removido, "removerFilme deve retornar a instância do filme que foi removido.");
    }

    @Test
    void testPlaySóComFilme() throws Exception {
        Method ligar = findMethod("ligar");
        ligar.invoke(dvdInstance);

        Method play = findMethod("play");
        Object resultado = play.invoke(dvdInstance);
        assertNull(resultado, "Não deve ser possível dar play sem filme inserido.");

        Class<?> filmeClass = Class.forName("Filme");
        Constructor<?> filmeCtor = filmeClass.getDeclaredConstructors()[0];
        filmeCtor.setAccessible(true);
        Object filme = filmeCtor.newInstance("Matrix", "Ficcao", 150);

        Method inserir = findMethod("inserirFilme", filmeClass);
        inserir.invoke(dvdInstance, filme);

        resultado = play.invoke(dvdInstance);
        assertNotNull(resultado, "Deve ser possível dar play com filme inserido.");
        assertTrue(resultado.toString().contains("Matrix"), "O play deve exibir o nome do filme.");
        assertTrue(resultado.toString().contains("150"), "O play deve exibir a duração do filme.");
    }

    @Test
    void testStopSóEmPlay() throws Exception {
        Method ligar = findMethod("ligar");
        ligar.invoke(dvdInstance);

        Class<?> filmeClass = Class.forName("Filme");
        Constructor<?> filmeCtor = filmeClass.getDeclaredConstructors()[0];
        filmeCtor.setAccessible(true);
        Object filme = filmeCtor.newInstance("Matrix", "Ficcao", 150);

        Method inserir = findMethod("inserirFilme", filmeClass);
        inserir.invoke(dvdInstance, filme);

        Method stop = findMethod("stop");
        assertNotNull(stop, "O método stop() não foi implementado.");
        stop.invoke(dvdInstance);

        boolean tocando = getPrivateBooleanField("tocando");
        assertFalse(tocando, "Se não estiver tocando, stop não deve alterar o estado.");

        Method play = findMethod("play");
        play.invoke(dvdInstance);
        assertTrue(getPrivateBooleanField("tocando"), "Após play, o aparelho deve estar tocando.");

        stop.invoke(dvdInstance);
        assertFalse(getPrivateBooleanField("tocando"), "Após stop, o aparelho não deve estar tocando.");
    }

    // --- Métodos Auxiliares ---

    private Method findMethod(String name, Class<?>... paramTypes) {
        try {
            return dvdClass.getDeclaredMethod(name, paramTypes);
        } catch (NoSuchMethodException e) {
            return null;
        }
    }

    private boolean getPrivateBooleanField(String name) {
        try {
            Field field = dvdClass.getDeclaredField(name);
            field.setAccessible(true);
            return field.getBoolean(dvdInstance);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao acessar campo privado: " + name, e);
        }
    }

    private int getPrivateIntField(String name) {
        try {
            Field field = dvdClass.getDeclaredField(name);
            field.setAccessible(true);
            return field.getInt(dvdInstance);
        } catch (Exception e) {
            throw new RuntimeException("Erro ao acessar campo privado: " + name, e);
        }
    }
}
