function generateChart() {
    var data = document.getElementById('data').value;
    var labels = document.getElementById('labels').value;
    labels = labels.replace(/,/g, '|');
    var chartUrl = 'https://image-charts.com/chart?cht=pd&chs=500x300&chd=t:' + data + '&chl=' + labels + '&chco=FFC6A5|FFFF42|DEF3BD';
    document.getElementById('chart').src = chartUrl;
}
