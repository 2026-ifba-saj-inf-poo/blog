public class Filme {
    private String nome;
    private String categoria;
    private int duracao;

    public Filme(String nome, String categoria, int duracao) {
        this.nome = nome;
        this.categoria = categoria;
        this.duracao = duracao;
    }

    public String getNome() {
        return nome;
    }

    public String getCategoria() {
        return categoria;
    }

    public int getDuracao() {
        return duracao;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public void setDuracao(int duracao) {
        this.duracao = duracao;
    }
}
