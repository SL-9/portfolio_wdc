$(function () {

	//ページ内スクロール

	// aタグの属性がhrefで値が#で始まる要素をクリックした場合に処理を実行
	$('a[href^="#"]').on('click', function () {
		var speed = 300;

		// 出発地点の値を取得
		var href = $(this).attr("href");

		// 到着地点を取得
		//【 href == “#” 】 変数hrefの値が”#”
		//【 || 】 もしくは
		//【href == “”】 “”
		//【 ? 】 であれば
		//【 $(‘html’); 】 へのリンク（≒ページトップ）
		//そうでなければ
		//【 $(href); 】 変数hrefの中身が到着地点になる
		var target = $(href == "#" || href == "" ? 'html' : href);

		// 到着地点を数値で取得
		var position = target.offset().top;

		// スムーススクロール
		$("html, body").animate({
			scrollTop: position

			// linear：常に同じ速さで動く
			// swing：始めはゆっくり動いて、途中はちょっと速め、最後はゆっくりと動く
		}, speed, "swing");

		//jQueryでのreturn false 親要素へのイベント伝播を止める
		//JavaScriptでのreturn false 親要素へのイベント伝播を止めない
		return false;
	});

	

	//ページトップへ戻る

	//「pagetop」という名前のついた箱に、class要素を入れるという意味（idも可）
	var $pageTop = $('.page-top');

	//window（画面）をスクロールした時に｛　｝内の処理が実行
	$(window).scroll(function () {

		//もし、スクロールの値が300以上だったら.pagetop要素をフェードインで表示。それ以外（スクロールの値が300以下）だったら、.-pagetop要素をフェードアウトで非表示
		if ($(this).scrollTop() > 300) {
			$pageTop.fadeIn();
		} else {
			$pageTop.fadeOut();
		}
	});

	//「$pageTop要素がクリックされたら〇〇する」という意味
	$pageTop.on('click', function () {

		//0pxの位置（ページの最上部）まで、0.3秒かけて移動
		$('body,html').animate({
			scrollTop: 0
		}, 300);

		//jQueryでのreturn false 親要素へのイベント伝播を止める
		//JavaScriptでのreturn false 親要素へのイベント伝播を止めない
		return false;
	});

		//ハンバーガーメニュー( sp )
		$btnMenu = $("#js-btn-menu");
		$gnav = $(".gnav");
	
		$btnMenu.on("click", function () {
			$btnMenu.toggleClass("active");
			$gnav.toggleClass("show");
			$gnav.animate({ width: "toggle" }, 200);
			// 横方向に開閉する
		});
	
		$(document).on("click", function (e) {
			if (
				!$(e.target).closest($gnav).length &&
				!$(e.target).closest($btnMenu).length
			) {
				if ($gnav.hasClass("show")) {
					$gnav.removeClass("show");
					$btnMenu.toggleClass("active");
					$gnav.animate({ width: "toggle" }, 200);
				}
			}
		});

});