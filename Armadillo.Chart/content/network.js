function Render2(sub) {
    console.log(sub);
}


function RenderNetwork() {
    var nodes = new vis.DataSet([
        {id: 1, label: 'Node 1'},
        {id: 2, label: 'Node 2'},
        {id: 3, label: 'Node 3'},
        {id: 4, label: 'Node 4'},
        {id: 5, label: 'Node 5'}
    ]);

    var edges = new vis.DataSet([
        {from: 1, to: 3},
        {from: 1, to: 2},
        {from: 2, to: 4},
        {from: 2, to: 5}
    ]);

    var container = document.getElementById('network');
 
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {};

    var network = new vis.Network(container, data, options);
}