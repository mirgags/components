if ('content' in document.createElement('template')) {

  const entries = [
    [
      "The 1st Title",
      "THe first text is blahblah blah."
    ],
    [
      "The Scond Title is Words",
      "How many words can I write in the 2nd text entry?  This Many."
    ],
    [
      "Oh Crap A Third Title?",
      "I can't think up more things to write can I?"
    ]
  ];

  let p = document.querySelector('#textentry');
  let divs = p.content.querySelectorAll('.singleEntry > *');
  for(i=0;i<entries.length;i++) {
    divs[0].textContent = entries[i][0];
    divs[1].textContent = entries[i][1];

    let aDiv = document.querySelector('#mainContent');
    let clone = document.importNode(p.content, true);
    aDiv.appendChild(clone);
  };
};
