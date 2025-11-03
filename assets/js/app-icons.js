
document.addEventListener("DOMContentLoaded", function() {
    const appWorkCards = document.querySelectorAll('.work-card.app');

    appWorkCards.forEach(card => {
        const playStoreLink = card.querySelector('.details-info a[href*="play.google.com"]');
        if (playStoreLink) {
            const playStoreUrl = playStoreLink.href;
            const appId = new URL(playStoreUrl).searchParams.get('id');
            if (appId) {
                const imgElement = card.querySelector('.work-img');
                const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(`https://play.google.com/store/apps/details?id=${appId}`)}`;

                fetch(proxyUrl)
                    .then(response => response.json())
                    .then(data => {
                        const parser = new DOMParser();
                        const htmlDoc = parser.parseFromString(data.contents, 'text/html');
                        const metaImage = htmlDoc.querySelector('meta[property="og:image"]');
                        if (metaImage) {
                            const imageUrl = metaImage.content;
                            imgElement.src = imageUrl;
                        }
                    })
                    .catch(error => console.error('Error fetching app icon:', error));
            }
        }
    });
});
