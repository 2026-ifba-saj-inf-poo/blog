public class AparelhoDVD {
    private boolean ligado;
    private int volume;
    private Filme filme;
    private boolean tocando;

    public AparelhoDVD() {
        this.ligado = false;
        this.volume = 2;
        this.filme = null;
        this.tocando = false;
    }

    public void ligar() {
        this.ligado = true;
    }

    public void desligar() {
        this.ligado = false;
        this.tocando = false;
    }

    public boolean isLigado() {
        return ligado;
    }

    public void aumentarVolume() {
        if (!ligado) return;
        if (volume < 5) {
            volume++;
        }
    }

    public void diminuirVolume() {
        if (!ligado) return;
        if (volume > 1) {
            volume--;
        }
    }

    public int getVolume() {
        return volume;
    }

    public void inserirFilme(Filme filme) {
        if (!ligado) return;
        this.filme = filme;
    }

    public Filme removerFilme() {
        if (!ligado) return null;
        Filme f = this.filme;
        this.filme = null;
        this.tocando = false;
        return f;
    }

    public Filme getFilme() {
        return filme;
    }

    public String play() {
        if (!ligado) return null;
        if (filme == null) return null;
        this.tocando = true;
        return "Nome: " + filme.getNome() + ", Duracao: " + filme.getDuracao();
    }

    public void stop() {
        if (!ligado) return;
        if (!tocando) return;
        this.tocando = false;
    }

    public boolean isTocando() {
        return tocando;
    }
}
