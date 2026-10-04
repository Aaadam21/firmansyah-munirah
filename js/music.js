// musik YouTube
var tag = document.createElement('script'); tag.src = 'https://www.youtube.com/iframe_api';
document.getElementsByTagName('script')[0].parentNode.insertBefore(tag, document.getElementsByTagName('script')[0]);
var player1;
function onYouTubeIframeAPIReady(){
	var c = document.getElementById('youtube-audio1');
	c.innerHTML = '<img id="youtube-icon1" src="images/audio/play.png" alt="Musik"/><div id="youtube-player1"></div>';
	c.style.cssText = 'width:20px;margin:0 auto;cursor:pointer;display:none';
	c.onclick = toggleAudio1;
	player1 = new YT.Player('youtube-player1', {
		height: '0', width: '0', videoId: CFG.musicId,
		playerVars: {autoplay: 0, loop: 1, playlist: CFG.musicId},
		events: {onReady: function(){ player1.setPlaybackQuality('small'); c.style.display = 'block'; }, onStateChange: function(e){ if (e.data === 0) togglePlayButton1(false); }}
	});
}
function togglePlayButton1(play){ document.getElementById('youtube-icon1').src = play ? 'images/audio/pause.png' : 'images/audio/play.png'; }
function toggleAudio1(){ var st = player1.getPlayerState(); if (st == 1 || st == 3) { player1.pauseVideo(); togglePlayButton1(false); } else { player1.playVideo(); togglePlayButton1(true); } }
function playAudio1(){ if (!player1 || !player1.getPlayerState) return; var st = player1.getPlayerState(); if (!(st == 1 || st == 3)) { player1.playVideo(); togglePlayButton1(true); } }
