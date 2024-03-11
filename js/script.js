function getDevice () {
	let device, os, browser;
	var ua = navigator.userAgent.toLowerCase();

	if (/mobile|android|iphone|ipad|ipod/i.test(ua)) {
		device = 'mo';
	} else {
		device = 'pc';
	}

	if (/android/i.test(ua)) {
		os = 'android';
	} else if (/iphone|ipad|ipod/i.test(ua)) {
		os = 'ios';
	} else if (/windows/i.test(ua)) {
		os = 'windows';
	} else if (/mac os/i.test(ua)) {
		os = 'mac';
	} else {
		os = '';
	}

	if (/naver/i.test(ua)) {
		browser = 'naver';
	} else if (/whale/i.test(ua)) {
		browser = 'whale';
	} else if (/kakaotalk/i.test(ua)) {
		browser = 'kakao';
	} else if (/samsung/i.test(ua)) {
		browser = 'samsung';
	} else if (/edg/i.test(ua)) {
		browser = 'edge';
	} else if (/firefox/i.test(ua)) {
		browser = 'firefox';
	} else if (/opera/i.test(ua)) {
		browser = 'opera';
	} else if (/chrome/i.test(ua)) {
		browser = 'chrome';
	} else if (/safari/i.test(ua)) {
		if (/version\/5/i.test(ua)) {
			browser = 'safari5';
		} else if (/version\/4/i.test(ua)) {
			browser = 'safari4';
		} else if (/version\/3/i.test(ua)) {
			browser = 'safari3';
		} else {
			browser = 'safari';
		}
	} else if (/msie|trident/i.test(ua)) {
		if (/msie 6/i.test(ua)) {
			browser = 'ie6';
		} else if (/msie 7/i.test(ua)) {
			browser = 'ie7';
		} else if (/msie 8/i.test(ua)) {
			browser = 'ie8';
		} else if (/msie 9/i.test(ua)) {
			browser = 'ie9';
		} else if (/msie 10/i.test(ua)) {
			browser = 'ie10';
		} else if (/rv:11.0/i.test(ua)) {
			browser = 'ie11';
		} else {
			browser = 'ie';
		}
	} else {
		browser = 'other';
	}

	return {
		device,
		os,
		browser
	};
}

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector('.toggle').addEventListener('click', e => {
		if(document.body.classList[0] == 'dark') {
			document.body.removeAttribute('class');
		} else {
			document.body.className = 'dark';
		}
	});
	document.querySelector('#wrap').setAttribute('data-device', getDevice().device);
});


document.addEventListener("mousemove", e => {
	document.querySelector('#cursor1').style.top = e.clientY+'px';
	document.querySelector('#cursor1').style.left = e.clientX+'px';
	setTimeout(() => {
		document.querySelector('#cursor2').style.top = e.clientY+'px';
		document.querySelector('#cursor2').style.left = e.clientX+'px';
	}, 100);
});

document.addEventListener("mousedown", e => {
	document.querySelector('#cursor1').style.top = e.clientY+'px';
	document.querySelector('#cursor1').style.left = e.clientX+'px';
	setTimeout(() => {
		document.querySelector('#cursor2').style.top = e.clientY+'px';
		document.querySelector('#cursor2').style.left = e.clientX+'px';
	}, 100);
});
