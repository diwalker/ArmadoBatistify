let musicas = [
    {titulo:'O fruto do nosso amor', artista:'Amado Batista', src:'musics/02. O Fruto do Nosso Amor (1978).mp3', img:'images/amado.jpg'},
    {titulo:'Serenata', artista:'Amado Batista', src:'musics/03. Serenata (1978).mp3', img:'images/amado.jpg'},
    {titulo:'Casamento imundo', artista:'Amado Batista', src:'musics/Casamento Imundo - Amado Batista.mp3', img:'images/amado.jpg'},
    {titulo:'Desisto', artista:'Amado Batista', src:'musics/Desisto - Amado Batista e Sergio Reis.MP3', img:'images/amado.jpg'},
    {titulo:'Feiticeira', artista:'Amado Batista', src:'musics/Feiticeira.mp3', img:'images/amado.jpg'},
    {titulo:'Folha seca', artista:'Amado Batista', src:'musics/Folha Seca - Amado Batista.MP3', img:'images/amado.jpg'},
    {titulo:'Menininha meu amor', artista:'Amado Batista & Frank Aguiar', src:'musics/Menininha Meu Amor - Amado Batista e Frank Aguiar.mp3', img:'images/amado.jpg'},
    {titulo:'Morro de ciúme dela', artista:'Amado Batista', src:'musics/Morro de Ciúme Dela.mp3', img:'images/amado.jpg'},
    {titulo:'Não quero falar com ela', artista:'Amado Batista', src:'musics/Não Quero Falar Com Ela - Amado Batista.mp3', img:'images/amado.jpg'},
    {titulo:'O acidente', artista:'Amado Batista', src:'musics/O Acidente - Amado Batista.mp3', img:'images/amado.jpg'},
    {titulo:'O pobretão', artista:'Amado Batista', src:'musics/O Pobretão.MP3', img:'images/amado.jpg'},
    {titulo:'Princesa', artista:'Amado Batista', src:'musics/Princesa - Amado Batista.mp3', img:'images/amado.jpg'},
    {titulo:'Reclamando sua ausência', artista:'Amado Batista', src:'musics/Reclamando Sua Ausência - Amado Batista.mp3', img:'images/amado.jpg'},
    {titulo:'Seresteiro das noites', artista:'Amado Batista', src:'musics/Seresteiro das Noites - Amado Batista.mp3', img:'images/amado.jpg'},
    {titulo:'Sua partida', artista:'Amado Batista', src:'musics/Seresteiro das Noites - Amado Batista.mp3', img:'images/amado.jpg'},
   ];

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//events
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
musica.addEventListener('loadeddata', duration);
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = musicas.length - 1;
    }
    renderizarMusica(indexMusica);
    musica.play();
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
    musica.play();
});

//functions

function duration(){
    let duracaoMusica = document.querySelector('.fim');


    duracaoMusica.textContent = segundosParaMinutos(Math.floor(currentSong.duration));
}

function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
        
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-play').style.display = 'block';
    document.querySelector('.botao-pause').style.display = 'none';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinuto = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos <  10){
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinuto + ':' + campoSegundos;
}