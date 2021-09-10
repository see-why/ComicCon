function hideGuests() {
  const div = document.getElementById('collapse');
  div.style.display = 'none';
  const moreButtonDiv = document.getElementById('do-collapse-div');
  moreButtonDiv.style.display = 'block';
  const lessButtonDiv = document.getElementById('undo-collapse-div');
  lessButtonDiv.style.display = 'none';
}

function showGuests() {
  const div = document.getElementById('collapse');
  div.style.display = 'block';
  const divButton = document.getElementById('undo-collapse-div');
  divButton.style.display = 'block';
  const moreButtonDiv = document.getElementById('do-collapse-div');
  moreButtonDiv.style.display = 'none';
}

const programSpeakers = [
  {
    batch: 1,
    name: 'Chris Evans',
    profession: 'Professional Actor',
    bio: 'Best known for his role as Captain America in the Marvel Cinematic Universe (MCU)',
    image: {
      url: 'images/chrisevans.jpg',
      alt: 'Chris Evans',
    },
  },
  {
    batch: 1,
    name: 'Kemi Adetiba',
    profession: 'Professional Director',
    bio: 'Nigerian filmmaker, best known for the Netflix series King Of Boys',
    image: {
      url: 'images/kemiAdetiba.jpg',
      alt: 'Kemi Adetiba',
    },
  },
  {
    batch: 2,
    name: 'Kit Harington',
    profession: 'Professional Actor',
    bio: 'Best known for his role as Jon Snow in Game Of Thrones',
    image: {
      url: 'images/KitHarrington.jpg',
      alt: 'Kit Harington',
    },
  },
  {
    batch: 2,
    name: 'Tina Fey',
    profession: 'Professional Actor and Director',
    bio: 'Best known for her work on the NBC sketch comedy series Saturday Night Live',
    image: {
      url: 'images/TinaFey.jpg',
      alt: 'Tina Fey',
    },
  },
  {
    batch: 3,
    name: 'Sola Sobowale',
    profession: 'Professional Actor',
    bio: 'Nigerian film actress, screenwriter, director and producer.',
    image: {
      url: 'images/shola.jpg',
      alt: 'Sola Sobowale',
    },
  },
  {
    batch: 3,
    name: 'Richard Mofe Damijo',
    profession: 'Professional Actor',
    bio: 'Popularly known as RMD, is a Nigerian actor, writer, producer, and lawyer.',
    image: {
      url: 'images/rmd.jpg',
      alt: 'Richard Mofe Damijo',
    },
  },

];

function loadSpeakers() {
  const speakersDivContainer = document.getElementById('speakers-div-container');
  const groupSpeakersDiv = document.createElement('div');
  const groupSpeakersDiv2 = document.createElement('div');
  const groupSpeakersDiv3 = document.createElement('div');
  groupSpeakersDiv.className = 'group-speakers-div';
  groupSpeakersDiv2.className = 'group-speakers-div';
  groupSpeakersDiv3.className = 'group-speakers-div';

  programSpeakers.forEach((each) => {
    const speakerDiv = document.createElement('div');
    speakerDiv.className = 'single-speaker-div';

    const speakerImgDiv = document.createElement('div');
    speakerImgDiv.className = 'speaker-img-div';

    const img = document.createElement('img');
    img.className = 'speaker-img';
    img.alt = each.image.alt;
    img.src = each.image.url;

    const imgDesign = document.createElement('img');
    imgDesign.className = 'speaker-img-design';
    imgDesign.alt = each.image.alt;

    speakerImgDiv.appendChild(imgDesign);
    speakerImgDiv.appendChild(img);

    const speakerInfoDiv = document.createElement('div');
    speakerInfoDiv.className = 'speaker-info-div';

    const h3 = document.createElement('h3');
    h3.innerHTML = each.name;
    speakerInfoDiv.appendChild(h3);

    const span = document.createElement('span');
    span.innerText = each.profession;
    speakerInfoDiv.appendChild(span);

    const hr = document.createElement('hr');
    speakerInfoDiv.appendChild(hr);

    const p = document.createElement('p');
    p.innerText = each.bio;
    speakerInfoDiv.appendChild(p);

    speakerDiv.appendChild(speakerImgDiv);
    speakerDiv.appendChild(speakerInfoDiv);

    if (each.batch === 1) {
      groupSpeakersDiv.appendChild(speakerDiv);
    } else if (each.batch === 2) {
      groupSpeakersDiv2.appendChild(speakerDiv);
    } else {
      groupSpeakersDiv3.appendChild(speakerDiv);
    }
  });

  speakersDivContainer.appendChild(groupSpeakersDiv);

  const collapseButtonDiv = document.createElement('div');
  collapseButtonDiv.className = 'do-collapse-div';
  collapseButtonDiv.id = 'do-collapse-div';
  const collapseButton = document.createElement('button');
  collapseButton.type = 'button';
  collapseButton.className = 'more-button';
  collapseButton.id = 'do-collapse';
  collapseButton.innerText = 'MORE';

  const buttonImg = document.createElement('img');
  buttonImg.src = 'images/more-arrow.PNG';
  buttonImg.alt = '';
  collapseButton.addEventListener('click', showGuests);
  collapseButton.appendChild(buttonImg);
  collapseButtonDiv.appendChild(collapseButton);

  speakersDivContainer.appendChild(collapseButtonDiv);

  const collapseDiv = document.createElement('div');
  collapseDiv.className = 'hide block';
  collapseDiv.id = 'collapse';

  collapseDiv.appendChild(groupSpeakersDiv2);
  collapseDiv.appendChild(groupSpeakersDiv3);

  speakersDivContainer.appendChild(collapseDiv);

  const undoCollapseButtonDiv = document.createElement('div');
  undoCollapseButtonDiv.className = 'hide undo-collapse-div';
  undoCollapseButtonDiv.id = 'undo-collapse-div';

  const undoCollapseButton = document.createElement('button');
  undoCollapseButton.className = 'less-button';
  undoCollapseButton.id = 'undo-collapse';
  undoCollapseButton.type = 'button';
  undoCollapseButton.addEventListener('click', hideGuests);

  const buttonImage = document.createElement('img');
  buttonImage.src = 'images/Less-arrow.png';
  buttonImage.alt = '';
  undoCollapseButton.appendChild(buttonImage);

  undoCollapseButtonDiv.appendChild(undoCollapseButton);

  speakersDivContainer.appendChild(undoCollapseButtonDiv);
}

const section = document.getElementById('');
if (section !== null) {
  section.addEventListener('click', loadSpeakers);
}