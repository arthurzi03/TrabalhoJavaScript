      
       const questions = [
        {
            question: "Como você reage a uma situação de crise?",
            options: [
                { text: "Busco unir as pessoas e encontrar uma solução pacífica.", points: { A: 3, B: 1, C: 0 } },
                { text: "Tomo medidas rápidas, mesmo que sejam duras, para restaurar a ordem.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "Qual é o seu maior valor?",
            options: [
                { text: "Bondade e compaixão.", points: { A: 3, B: 1, C: 0 } },
                { text: "Justiça e lealdade.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "Como você se sente em relação ao poder?",
            options: [
                { text: "Acredito que o poder deve ser usado para ajudar os outros.", points: { A: 3, B: 1, C: 0 } },
                { text: "O poder é necessário para proteger os que amo, mesmo que eu precise ser severo.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "O que você faz em um conflito?",
            options: [
                { text: "Tento mediar e encontrar um meio-termo.", points: { A: 1, B: 3, C: 0 } },
                { text: "Tomo partido e defendo quem considero certo.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "Como você lida com a dor emocional?",
            options: [
                { text: "Busco consolo em amigos e familiares, acreditando na força da união.", points: { A: 3, B: 1, C: 0 } },
                { text: "Encaro a dor como uma parte da vida e me esforço para superá-la sozinho.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "Qual é o seu tipo de amigo?",
            options: [
                { text: "Alguém que sempre está lá para oferecer apoio e motivação.", points: { A: 3, B: 1, C: 0 } },
                { text: "Alguém que é leal e não hesita em proteger o que é importante.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "O que você faria ao encontrar alguém em perigo?",
            options: [
                { text: "Ofereceria ajuda imediata e conforto.", points: { A: 3, B: 1, C: 0 } },
                { text: "Analisaria a situação e tomaria a melhor decisão, mesmo que isso signifique ser rigoroso.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "Como você se vê no futuro?",
            options: [
                { text: "Como alguém que faz a diferença, trazendo luz ao mundo.", points: { A: 3, B: 1, C: 0 } },
                { text: "Como um protetor que usa todos os meios necessários para garantir a segurança dos meus.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "O que mais te motiva?",
            options: [
                { text: "Ver as pessoas ao meu redor felizes e em paz.", points: { A: 3, B: 1, C: 0 } },
                { text: "Proteger aqueles que amo, independentemente do custo.", points: { A: 0, B: 1, C: 3 } },
            ]
        },
        {
            question: "Qual é a sua abordagem ao enfrentar desafios?",
            options: [
                { text: "Enfrento-os com otimismo e esperança.", points: { A: 3, B: 1, C: 0 } },
                { text: "Analiso a situação e estou disposto a agir de forma decisiva, se necessário.", points: { A: 0, B: 1, C: 3 } },
            ]
        }
    ];
    
   
    let scores = { A: 0, B: 0, C: 0 };
    
  
    document.getElementById("start").addEventListener("click", () => {
        document.getElementById("start").style.display = "none";
        document.getElementById("questionnaire").style.display = "block";
        loadQuestions();
    });
    
   
    function loadQuestions() {
        const container = document.getElementById("questions-container");
        container.innerHTML = '';
    
        questions.forEach((q, index) => {
            const questionDiv = document.createElement("div");
            questionDiv.innerHTML = `<p>${q.question}</p>`;
            q.options.forEach(option => {
                questionDiv.innerHTML += `
                    <label>
                        <input type="radio" name="question${index}" value="${option.points.A},${option.points.B},${option.points.C}">
                        ${option.text}
                    </label><br>
                `;
            });
            container.appendChild(questionDiv);
        });
    }
    
    
    document.getElementById("submit").addEventListener("click", () => {
        const answers = document.querySelectorAll('input[type="radio"]:checked');
        answers.forEach((answer) => {
            const [pointA, pointB, pointC] = answer.value.split(',').map(Number);
            scores.A += pointA;
            scores.B += pointB;
            scores.C += pointC;
        });
        displayResult();
    });
    
    
    function displayResult() {
        let character;
        if (scores.A > scores.B && scores.A > scores.C) {
            character = { name: "Elyon", description: "Elyon é um pacifista que busca a harmonia e a união entre todos.", image: "elyon.jpg" };
        } else if (scores.B > scores.A && scores.B > scores.C) {
            character = { name: "Lira", description: "Lira é uma defensora feroz da justiça e está sempre pronta para proteger os seus.", image: "lira.jpg" };
        } else {
            character = { name: "Lucian", description: "Lucian é um líder pragmático que acredita na necessidade de ordem e proteção.", image: "lucian.jpg" };
        }
    
        document.getElementById("character-name").innerText = character.name;
        document.getElementById("character-description").innerText = character.description;
        document.getElementById("character-image").src = character.image;
        document.getElementById("score").innerText = `Pontuação: Elyon - ${scores.A}, Lira - ${scores.B}, Lucian - ${scores.C}`;
        document.getElementById("questionnaire").style.display = "none";
        document.getElementById("result").style.display = "block";
    }
    
   
    document.getElementById("restart").addEventListener("click", () => {
        scores = { A: 0, B: 0, C: 0 };
        document.getElementById("result").style.display = "none";
        document.getElementById("start").style.display = "block";
    });