const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ano: 2025. Você acaba de sair da escola quando escuta sobre uma nova tecnologia chamada IA Generativa. Qual é sua primeira reação?",
        alternativas: [
            {
                texto: "Fico deslumbrado(a) e começo a explorar imediatamente.",
                afirmacao: "Você mergulhou no mundo da IA, curioso(a) para entender como ela funcionava e como poderia transformar a sociedade."
            },
            {
                texto: "Fico desconfiado(a), parece perigoso.",
                afirmacao: "Sua desconfiança despertou em você o desejo de entender a fundo os impactos e riscos da tecnologia antes de aceitá-la."
            }
        ]
    },
    {
        enunciado: "Meses depois, a escola lança um projeto sobre IA. O que você propõe?",
        alternativas: [
            {
                texto: "Um assistente virtual para idosos com lembretes de remédios.",
                afirmacao: "Você mostrou como a IA pode ser usada com empatia, ajudando quem mais precisa de apoio tecnológico."
            },
            {
                texto: "Um robô de conversa que combate discursos de ódio online.",
                afirmacao: "Você usou a tecnologia para defender valores humanos e promover respeito nas redes."
            }
        ]
    },
    {
        enunciado: "Seus colegas começam a copiar textos da IA nas tarefas. O que você faz?",
        alternativas: [
            {
                texto: "Sugiro que a escola crie um Código de Ética para o uso da IA.",
                afirmacao: "Sua ideia foi aceita e você passou a orientar os colegas sobre o uso consciente da tecnologia."
            },
            {
                texto: "Organizo uma roda de conversa sobre ética e criatividade com IA.",
                afirmacao: "Você criou um espaço seguro para refletir sobre os limites do uso da IA na educação."
            }
        ]
    },
    {
        enunciado: "Ano: 2028. Em uma feira de ciências, como você representa o futuro da IA?",
        alternativas: [
            {
                texto: "Desenho humanos e robôs construindo juntos uma cidade do futuro.",
                afirmacao: "Sua arte inspirou olhares esperançosos sobre a colaboração entre humanos e máquinas."
            },
            {
                texto: "Gero uma imagem com IA mostrando um mundo dividido entre liberdade e controle.",
                afirmacao: "Sua obra provocou debates profundos sobre os caminhos possíveis da humanidade."
            }
        ]
    },
    {
        enunciado: "Ano: 2035. Você fala em um congresso sobre uso responsável da IA. O que defende?",
        alternativas: [
            {
                texto: "A IA deve sempre fortalecer decisões humanas, não substituí-las.",
                afirmacao: "Você reforçou a importância de manter o controle humano em decisões críticas."
            },
            {
                texto: "A IA pode decidir sim, se for ética e transparente.",
                afirmacao: "Você ajudou a criar protocolos para auditoria de algoritmos, influenciando leis nacionais."
            }
        ]
    },
    {
        enunciado: "Ano: 2049. Você participa da criação de uma IA global. Qual sua principal contribuição?",
        alternativas: [
            {
                texto: "Programar limites éticos para proteger a liberdade individual.",
                afirmacao: "Sua atuação garantiu que a IA respeitasse os direitos humanos acima de qualquer dado estatístico."
            },
            {
                texto: "Criar um sistema onde a IA aprende com culturas diversas.",
                afirmacao: "Você tornou a IA mais empática, diversa e representativa do mundo real."
            }
        ]
    }
];

let perguntaAtual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (perguntaAtual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const pergunta = perguntas[perguntaAtual];
    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.onclick = () => {
            historiaFinal += alternativa.afirmacao + " ";
            perguntaAtual++;
            mostraPergunta();
        };
        caixaAlternativas.appendChild(botao);
    });
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049, sua jornada com a IA chegou a um ponto de transformação global...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

// Iniciar o jogo
document.addEventListener("DOMContentLoaded", mostraPergunta);
