import numpy as np
import networkx as nx
import random
from flask import Flask

from werkzeug.contrib.cache import SimpleCache
cache = SimpleCache()

app = Flask(__name__)

@app.route('/')
def hello_world():
    G = get_graph()
    
    s = 'nodes= {}, edges = {}'.format(len(G.nodes), len(G.edges))
    
    return s


def get_graph():
    # load graph into cache / return graph
    
    G = cache.get('the_graph')
    if G is None:
        file = 'my_trxn_graph.gml'
        G = nx.read_gml(file)
        cache.set('the_graph', G, timeout=5 * 60)
    return G


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True)