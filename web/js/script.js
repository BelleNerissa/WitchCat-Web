if (window.SimpleSlide) {
    new SimpleSlide({
        slide: "quote-slide",
        time: 5000,
        pauseOnHover: true,
    });
    new SimpleSlide({
        slide: "portifolio-slide",
        nav: true,
    });
}

if (window.SimpleAnime) {
    new SimpleAnime();
}
if (window.SimpleForm) {
    new SimpleForm({
        form: ".formphp", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro' class='orcamento_dados'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@witchcat.com.br</p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso' class='orcamento_dados'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato com você.</p></div>", // mensagem de sucesso
    });
}