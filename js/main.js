function scrollToElement(id){ $('html, body').animate({scrollTop: $('#'+id).offset().top}, 1000); }

$(function(){
	$('.fh5co-loader').fadeOut('slow');

	// animasi masuk
	$('.animate-box').waypoint(function(dir){
		if (dir === 'down' && !$(this.element).hasClass('animated-fast')) {
			$(this.element).addClass('item-animate');
			setTimeout(function(){
				$('.animate-box.item-animate').each(function(k){
					var el = $(this);
					setTimeout(function(){ el.addClass('fadeInUp animated-fast').removeClass('item-animate'); }, k * 200);
				});
			}, 100);
		}
	}, {offset: '85%'});

	// nama tamu dari ?to=Nama
	var to = new URLSearchParams(location.search).get('to');
	if (to) { $('#guest').text(to).show(); $('#guest-default').hide(); }

	// link dari CFG; yang kosong disembunyikan
	$('a[data-cfg]').each(function(){
		var v = CFG; $(this).data('cfg').split('.').forEach(function(k){ v = v && v[k]; });
		if (v) this.href = v;
	});
	$('a[data-cfg]:not([href])').parent().hide();
	$('ul.fh5co-social-icons').each(function(){ if (!$(this).find('a[href]').length) $(this).hide(); });

	// lokasi + QR
	if (CFG.mapsUrl) {
		$('#loc-qr').show(); $('#map-btn').attr('href', CFG.mapsUrl);
		makeQR(CFG.mapsUrl, document.getElementById('qr'));
	}

	// kalender
	function z(d){ return d.toISOString().replace(/[-:]/g,'').replace(/\.\d+/,''); }
	var s = new Date(CFG.eventStart), e = new Date(CFG.eventEnd);
	$('#save-date').attr('href', 'https://calendar.google.com/calendar/render?action=TEMPLATE&text=' + encodeURIComponent(CFG.eventTitle) + '&dates=' + z(s) + '/' + z(e) + '&location=' + encodeURIComponent(CFG.venue));

	// countdown dikunci ke WIB (waktu dihitung dalam UTC)
	simplyCountdown('.simply-countdown-wedding', {
		year: s.getUTCFullYear(), month: s.getUTCMonth() + 1, day: s.getUTCDate(),
		hour: s.getUTCHours(), minutes: s.getUTCMinutes(), seconds: 0,
		enableUtc: true, countUp: false
	});

	$('#open-invitation').click(function(){ $('#overlay').addClass('hide-overlay'); playAudio1(); });
});

// galeri
var lgContainer = document.getElementById('inline-gallery-container');
lightGallery(lgContainer, {
	container: lgContainer, dynamic: true, thumbnail: true, hash: false, closable: false,
	showMaximizeIcon: true, download: false, slideDelay: 400,
	plugins: [lgThumbnail, lgAutoplay, lgFullscreen],
	dynamicEl: [
		{src: 'images/gallery/1.jpg', thumb: 'images/gallery/1-thumb.jpg'},
		{src: 'images/gallery/2.jpg', thumb: 'images/gallery/2-thumb.jpg'},
		{src: 'images/gallery/3.jpg', thumb: 'images/gallery/3-thumb.jpg'}
	]
}).openGallery();
