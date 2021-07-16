var quotes = [ 
    'The intelligent machine is an evil genie, escaped from its bottle.-Brian Herbert',
    'I visualize a time when we will be to robots what dogs are to humans, and I\'m rooting for the machines. -Claude Shannon',
    'A year spent in artificial intelligence is enough to make one believe in God -Alan Perlis',
    'The sad thing about artificial intelligence is that it lacks artifice and therefore intelligence.-JEAN BAUDRILLARD', 
    'The story of evolution unfolds with increasing levels of abstraction.- Ray Kurzwell', 
    'A real artificial intelligence would be intelligent enough not to reveal that it was genuinely intelligent.-George Dyson',    'Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.- Og Mandino', 
    'With artificial intelligence we are summoning the demon.-Elon Musk',
    'Artificial intelligence is about replacing human decision making with more sophisticated technologies.-Falguni Desai'
]


function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length)); 
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
    document.getElementById('quoteDisplay').style.marginLeft = "1cm";  
    document.getElementById('quoteDisplay').style.fontSize = "19px";
}