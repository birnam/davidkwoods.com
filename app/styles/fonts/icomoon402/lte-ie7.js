/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-home' : '&#x61;',
			'icon-stack' : '&#x62;',
			'icon-book' : '&#x63;',
			'icon-image' : '&#x64;',
			'icon-headphones' : '&#x65;',
			'icon-envelop' : '&#x66;',
			'icon-phone' : '&#x67;',
			'icon-bubbles' : '&#x68;',
			'icon-key' : '&#x69;',
			'icon-cogs' : '&#x6a;',
			'icon-cog' : '&#x6b;',
			'icon-leaf' : '&#x6c;',
			'icon-switch' : '&#x6d;',
			'icon-lightning' : '&#x6e;',
			'icon-fire' : '&#x6f;',
			'icon-link' : '&#x70;',
			'icon-bookmarks' : '&#x71;',
			'icon-cancel-circle' : '&#x72;',
			'icon-checkmark-circle' : '&#x73;',
			'icon-spam' : '&#x74;',
			'icon-close' : '&#x75;',
			'icon-checkmark' : '&#x76;',
			'icon-plus' : '&#x77;',
			'icon-minus' : '&#x78;',
			'icon-console' : '&#x79;',
			'icon-mail' : '&#x7a;',
			'icon-share' : '&#x41;',
			'icon-mail-2' : '&#x42;',
			'icon-google-plus' : '&#x43;',
			'icon-google-plus-2' : '&#x44;',
			'icon-facebook' : '&#x45;',
			'icon-facebook-2' : '&#x46;',
			'icon-facebook-3' : '&#x47;',
			'icon-instagram' : '&#x48;',
			'icon-twitter' : '&#x49;',
			'icon-twitter-2' : '&#x4a;',
			'icon-twitter-3' : '&#x4b;',
			'icon-feed' : '&#x4c;',
			'icon-feed-2' : '&#x4d;',
			'icon-feed-3' : '&#x4e;',
			'icon-steam' : '&#x4f;',
			'icon-steam-2' : '&#x50;',
			'icon-github' : '&#x51;',
			'icon-github-2' : '&#x52;',
			'icon-github-3' : '&#x53;',
			'icon-github-4' : '&#x54;',
			'icon-github-5' : '&#x55;',
			'icon-tux' : '&#x56;',
			'icon-apple' : '&#x57;',
			'icon-android' : '&#x58;',
			'icon-windows' : '&#x59;',
			'icon-windows8' : '&#x5a;',
			'icon-soundcloud' : '&#x30;',
			'icon-soundcloud-2' : '&#x31;',
			'icon-skype' : '&#x32;',
			'icon-linkedin' : '&#x33;',
			'icon-delicious' : '&#x34;',
			'icon-stackoverflow' : '&#x35;',
			'icon-html5' : '&#x36;',
			'icon-html5-2' : '&#x37;',
			'icon-css3' : '&#x38;',
			'icon-IE' : '&#x39;',
			'icon-opera' : '&#x21;',
			'icon-safari' : '&#x40;',
			'icon-firefox' : '&#x23;',
			'icon-chrome' : '&#x24;',
			'icon-profile' : '&#x22;',
			'icon-qrcode' : '&#x25;',
			'icon-location' : '&#x26;',
			'icon-file' : '&#x27;',
			'icon-file-2' : '&#x28;',
			'icon-file-3' : '&#x29;',
			'icon-music' : '&#x2a;',
			'icon-camera' : '&#x2b;',
			'icon-images' : '&#x2c;',
			'icon-user' : '&#x2d;',
			'icon-users' : '&#x2e;',
			'icon-wrench' : '&#x2f;',
			'icon-cog-2' : '&#x3a;',
			'icon-earth' : '&#x3b;',
			'icon-file-xml' : '&#x3c;',
			'icon-file-css' : '&#x3d;',
			'icon-file-excel' : '&#x3e;',
			'icon-file-pdf' : '&#x3f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};