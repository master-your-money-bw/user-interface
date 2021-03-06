class TabLink {
  constructor(tabElement) {
    this.tabElement = tabElement;

    this.tabData = this.tabElement.dataset.tab;

    if (this.tabData == "all") {
      this.cards = document.querySelectorAll(".card");
    } else {
      this.cards = document.querySelectorAll(
        '.card[data-tab="' + this.tabData + '"]'
      );
    }

    this.cards = Array.from(this.cards).map(card => new TabCard(card));

    this.tabElement.addEventListener("click", () => this.selectTab());
  }

  selectTab() {
    const tabs = document.querySelectorAll(".tab");

    tabs.forEach(tab => tab.classList.remove("active-tab"));

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => (card.style.display = "none"));

    this.tabElement.classList.add("active-tab");

    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement) {
    // Assign this.cardElement to the cardElement DOM reference
    this.cardElement = cardElement;
  }
  selectCard() {
    // Update the style of this.cardElement to display = "flex"
    this.cardElement.style.display = "flex";
  }
}

let tabs = document.querySelectorAll(".tab").forEach(tab => new TabLink(tab));

let header = document.querySelector(".header h1");
// i = 1;
// header.addEventListener("mouseover", () => {
//   let x = TweenMax.to(".header h1", 1, { rotationY: 360 * i });
//   i++;
//   x.invalidate();
//   x.restart();
// });

header.addEventListener("mouseover", () => {
  TweenMax.fromTo(header, 1, { rotationY: 0 }, { rotationY: 360 });
});
