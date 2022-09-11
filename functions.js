;(function($) {
	var $w = $(window);
	var bp = 768;
	var init = function() {
		slickSlide();
	strongChart();
};

$(init);

	// レスポンシブ対応用イベントトリガー
	(function() {
		var size_base;

		$(function() {
			size_base = (window.innerWidth <= bp) ? 'sp' : 'notSp';

			if (size_base === 'sp') {
				$w.trigger('_size.sp');
			} else {
				$w.trigger('_size.notSp');
			}
		});
		$w.on('resize', function() {
			var size = (window.innerWidth <= bp) ? 'sp' : 'notSp';

			if (size !== size_base) {
				if (size === 'sp') {
					$w.trigger('_size.sp');
				} else {
					$w.trigger('_size.notSp');
				}
				size_base = size;
			}
		});
	})();
	
	// スライド
	function slickSlide() {
		var $slide = $('.slider');
		
		$slide.slick({
			infinite: true,
			slidesToScroll: 1,
			dots: true,
			autoplay: true,
			speed: 500,
			centerMode: true,
			arrows: true,
			variableWidth: true,
			responsive: [{
				breakpoint: 1280,
				settings: {
					variableWidth: false,
				}
			}]
		});
	}


	// レーダーチャート
	function strongChart() {

		var drawGraph = function(data){
			var ctx = document.getElementById('strongCart').getContext('2d');
				// データ1 ここで色などを指定
				var data1 = {
					label:'学生時代 (%)',
					data:data[1],
					backgroundColor: "rgba(50, 50, 250, 0.3)",
					borderColor: "rgba(50, 50, 200, 0.3)",
					pointHoverBackgroundColor: "rgba(50, 50, 200, 0.3)",
					pointHoverBorderColor: "rgba(50, 50, 200, 0.3)",
				};
				// データ2
				var data2 = {
					label:'将来 (%)',
					data:data[2],
					backgroundColor: "rgba(250, 50, 50, 0.3)",
					borderColor: "rgba(200, 50, 50, 0.3)",
					pointHoverBackgroundColor: "rgba(200, 50, 50, 0.3)",
					pointHoverBorderColor: "rgba(200, 50, 50, 0.3)",
				}
				// ラベル(横軸)
				var label = data[0];
				
				// データの設定
				var config = {
					type: 'radar', // グラフの種類（レーダーチャートを指定）
					data: { labels: label, datasets: [data1, data2]},
					
					// オプション設定
					options: {
					//凡例の設定
						legend: {
							// 表示位置カスタマイズ
							position: 'bottom',
							// 文字サイズのカスタマイズ
							fontSize: 20,
						},
						// レスポンシブ指定
						responsive: true,
						//スケールの設定
						scale: {
							pointLabels: {
								// 文字色のカスタマイズ
								fontColor: '#333',
								// 文字サイズのカスタマイズ
								fontSize: 20,
							},
							ticks: {
							// 目盛り値のカスタマイズ
							stepSize: 20,
							// 最小値の値を0指定
							beginAtZero:true,
							min: 0,
							// 最大値を指定
							max: 100,
							}
						}
					}
				}

			var myChartGraph = new Chart(ctx, config);

		};

		// ラベルの設定
		var data = [['明るさ', '健康', '勤勉', '真面目', 'アイデア力'],
		[44, 60, 70, 30, 15],
		[70, 95, 80, 95, 50]]
		drawGraph(data);
	}

})(jQuery);
