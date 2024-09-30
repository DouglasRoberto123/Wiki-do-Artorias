function showPage(page) {  
    const content = document.getElementById('content');  
    
    content.style.opacity = 0; // Faz o conteúdo desaparecer  
    
    setTimeout(() => { // Após 300ms (tempo da transição)  
        if (page === 'home') {  
            content.innerHTML = `  
                <h2>Bem-vindo à Wiki sobre Artorias, o Abyss Walker</h2>  
                <p>Artorias é um personagem muito respeitado por mim que vivenciou sua história por conta própria, Então ele merecia uma Wiki só sobre ele!</p>  
            `;  
        } else if (page === 'artorio') {  
            content.innerHTML = `  
                <h2>Artorias, o Abyss Walker</h2>  
                <p><strong>Artorias, o Abyss Walker</strong>, é um dos personagens mais trágicos e reverenciados na série Dark Souls. Conhecido por sua bravura e habilidade excepcionais em combate, Artorias se tornou um símbolo de heroísmo. Ele era um dos Cavaleiros de Gwyn, o Senhor da Luz, e foi instrumental na batalha contra as forças do Abismo.</p>  
                <img src="queda.jpg" alt="Artorias" style="width:100%; max-width:180px; border-radius:8px;"> 
                <p>Artorias é famoso por sua luta contra Manus, o Pai do Abismo, que acabou por deixá-lo incapacitado. Sua luta com Manus é um momento emblemático que captura o espírito da série, mostrando a luta de um herói contra forças esmagadoras. A batalha não apenas destaca suas habilidades, mas também a dor de perder um amigo, que estava sob a influência da escuridão.</p>  
                <img src="grande luta.jpg" alt="Artorias" style="width:100%; max-width:400px; border-radius:8px;">  
                <p>A sua lealdade e bravura inspiraram muitos dentro do universo de Dark Souls, e sua trágica história continua a ressoar com os fãs até hoje.</p>  
                <h3>A Espada do Abismo</h3>  
                <p>A "Espada do Abismo" (ou "Great Sword of Artorias") é uma das armas mais icônicas do universo de Dark Souls. Essa espada é a pose de Artorias e é conhecida por sua grande força e habilidade em combate. A espada é forjada a partir da própria essência do abismo e carrega consigo a dor e a tristeza de Artorias.</p>  
                <img src="espada.jpg" alt="Espada do Abismo" style="width:100%; max-width:350px; border-radius:8px;">  
                <p>Durante a luta contra o Jogador, Sif, o lobo gigante, guarda essa lâmina, simbolizando a lealdade e a conexão entre o cavaleiro e seu fiel companheiro. A espada não apenas representa o poder de Artorias, mas também sua queda e os pesares que acompanham sua história.</p>  
                <p>Os jogadores que conseguiam empunhar a "Espada do Abismo" são frequentemente recompensados com uma experiência de combate significativa, uma vez que a espada oferece um equilíbrio único entre velocidade e dano. É um lembrete das lutas e sacrifícios de um grande herói, que agora vive nas memórias daqueles que enfrentaram suas batalhas.</p>  
            `;  
        } else if (page === 'sif') {  
            content.innerHTML = `  
                <h2>Grande Lobo Cinzento Sif</h2>  
                <p><strong>Grande Lobo Cinzento Sif</strong> é o fiel companheiro de Artorias e um dos chefes mais memoráveis da série Dark Souls. Ele guarda a espada e o túmulo de seu mestre, que ele protegeu mesmo após a queda de Artorias. Sif é conhecido pela aparência majestosa e pela força e agilidade impressionantes em batalha.</p>  
                <img src="sif.png" alt="Great Gray Wolf Sif" style="width:100%; max-width:200px; border-radius:8px;"> 
                <p>A luta contra Sif é particularmente emocional, pois representa a lealdade inabalável de um amigo que foi deixado para trás. Quando o jogador se depara com Sif, a cena evoca um forte sentimento de tristeza, já que o lobo é forçado a lutar contra o jogador para proteger o túmulo de seu mestre. Essa batalha não é apenas um combate; é um tributo à amizade, lealdade e perda.</p> 
                <img src="companheiros.jpg" alt="Great Gray Wolf Sif" style="width:100%; max-width:400px; border-radius:8px;"> 
                <p>Sif tornou-se um ícone na série, representando a conexão entre um cavaleiro e seu companheiro canino, e a dor que acompanha a perda.</p>  
                 `;  
        }  

        else if (page === 'credits') {  
            content.innerHTML = `  
                <h2>Créditos</h2>   
                <ul>  
                    <li>Jogo: Dark Souls</li>  
                    <li>Desenvolvedores: FromSoftware</li>  
                    <li>Site Por: Douglas Roberto (Com mais de 1500 horas de Dark Souls!), Filipe Alves (Nunca jogou Souls, mas vai ganhar nota...) e Sider(Extensão de IA)</li>  
                    <li>Recomendação: canal do Kelnow no youtube</li>  
                    <li>Agradecimentos especiais a: Hidetaka Miyazaki</li> 
                </ul>  
            `;  
        }  
        
        content.style.opacity = 1; // Faz o conteúdo reaparecer  
    }, 300); // Espera 300ms antes de trocar o conteúdo  
}  