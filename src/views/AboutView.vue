<template>
  <section class="about-page">
    <div class="about-card">
      <h1>👨‍💻 Über den Entwickler</h1>
      <p class="intro">
        Hallo, mein Name ist <strong>Leif Stöhr</strong> und ich habe <span class="brand">CookingBook.de</span> als
        persönliche Webanwendung entwickelt.
      </p>

      <p>
        Ziel dieser Anwendung ist es, eine einfache und intuitive Möglichkeit zu bieten, eigene Lieblingsrezepte
        digital zu speichern, zu durchsuchen und zu verwalten.
      </p>

      <p>
        Ob spontane Inspiration oder sorgfältige Planung – CookingBook.de ist dein persönliches digitales Kochbuch.
        Viel Spaß beim Ausprobieren!
      </p>

      <p class="footer-note">👨‍🍳 Entwickelt mit Herz – von einem Kochbegeisterten für Kochbegeisterte.</p>
    </div>
  </section>
</template>

<style scoped>
.about-page {
  display: flex;
  justify-content: center;
  padding: 3rem 1.5rem;
}

.about-card {
  max-width: 700px;
  background-color: #f4f9ff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}

.about-card h1 {
  font-size: 1.8rem;
  color: #0d47a1;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.05rem;
  margin-bottom: 1rem;
}

.about-card p {
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  margin-bottom: 1rem;
}

.brand {
  color: #1976d2;
  font-weight: bold;
}

.footer-note {
  font-style: italic;
  color: #666;
  margin-top: 2rem;
}
</style>
