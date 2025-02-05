// Inicializa o Swiper para o carrossel
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});

// Abrir Modal de Vídeo
function openVideoModal(videoName) {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");

    let videoURL = "";
    switch (videoName) {
        case "zelda":
            videoURL = "https://www.youtube.com/embed/94RTrH2erPE";
            break;
        case "mario":
            videoURL = "https://www.youtube.com/embed/5kcdRBHM7kM";
            break;
        case "pokemon":
            videoURL = "https://www.youtube.com/embed/I4RynqpahT8";
            break;
        case "metroid":
        videoURL = "https://www.youtube.com/embed/8NjCICl7dDo"; // Link do trailer oficial de Metroid Dread
            break;
    case "kirby":
        videoURL = "https://www.youtube.com/embed/H3LAkr0ANgw"; // Link do trailer oficial de Kirby and the Forgotten Land
        break;
        default:
            console.error("Vídeo não encontrado: ", videoName);
            return;
    }
    iframe.src = videoURL;
    modal.style.display = "block";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const iframe = document.getElementById("videoFrame");
    modal.style.display = "none";
    iframe.src = "";
}

// Abrir Modal de Produto
function openProductModal(title, description, price, image) {
    document.getElementById("productTitle").textContent = title;
    document.getElementById("productDescription").textContent = description;
    document.getElementById("productPrice").textContent = price;
    document.getElementById("productImage").src = image;
    document.getElementById("productModal").style.display = "block";
}

function closeProductModal() {
    document.getElementById("productModal").style.display = "none";
}

// Fechar modais ao clicar fora do conteúdo
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
