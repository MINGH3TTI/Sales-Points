let currentPage = 'home';
let currentCategory = null;
let currentBusiness = null;

function hideAllPages() {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('list-page').classList.add('hidden');
    document.getElementById('detail-page').classList.add('hidden');
}

function showPage(pageId) {
    hideAllPages();
    const page = document.getElementById(pageId);
    page.classList.remove('hidden');
    page.classList.add('fade-in');
}

function showCategory(category) {
    currentPage = 'list';
    currentCategory = category;
    currentBusiness = null;

    const businessList = document.getElementById('business-list');
    const pageTitle = document.getElementById('page-title');
    const navItems = document.getElementById('nav-items');
    const currentCategoryEl = document.getElementById('current-category');

    businessList.innerHTML = '<div class="loading">Carregando estabelecimentos...</div>';

    setTimeout(() => {
        businessList.innerHTML = '';

        const items = businessData[category] || [];
        items.forEach(item => {
            const businessItem = document.createElement('div');
            businessItem.className = 'business-item';
            businessItem.innerHTML = `
                <div class="business-title">${item.name}</div>
                <div class="business-subtitle">${item.subtitle}</div>
            `;

            businessItem.onclick = () => showBusinessDetail(item);
            businessList.appendChild(businessItem);
        });
    }, 500);

    showPage('list-page');
}

function showBusinessDetail(business) {
    currentPage = 'detail';
    currentBusiness = business;

    const businessDetail = document.getElementById('business-detail');
    let detailHTML = `<div class="business-name">${business.name}</div>`;

    if (business.address) {
        detailHTML += `<div class="business-info"><strong>Endereço:</strong> ${business.address}</div>`;
    }

    if (business.phone) {
        detailHTML += `<div class="business-info"><strong>Telefone:</strong> ${business.phone}</div>`;
    }

    if (business.hours) {
        detailHTML += `<div class="business-info"><strong>Horário de Funcionamento:</strong><br>${business.hours}</div>`;
    }

    if (business.description) {
        detailHTML += `<div class="business-info"><strong>Informação:</strong> ${business.description}</div>`;
    }

    if (business.businesses) {
        detailHTML += `<div style="margin-top: 20px;">`;
        business.businesses.forEach(sub => {
            detailHTML += `
                <div class="business-item" onclick="showSubBusinessDetail('${sub.name}', '${sub.address}', '${sub.phone}', '${sub.hours || ''}', '${sub.imageUrl || ''}')">
                    <div class="business-title">${sub.name}</div>
                    <div class="business-subtitle">${sub.address}</div>
                </div>
            `;
        });
        detailHTML += `</div>`;
    }

    businessDetail.innerHTML = detailHTML;

    showPage('detail-page');
}

function showSubBusinessDetail(name, address, phone, hours, imageUrl) {
    const businessDetail = document.getElementById('business-detail');
    let detailHTML = `
        <div class="business-name">${name}</div>
        <div class="business-info"><strong>Endereço:</strong> ${address}</div>
        <div class="business-info"><strong>Telefone:</strong> ${phone}</div>
    `;

    if (hours && hours !== '') {
        detailHTML += `<div class="business-info"><strong>Horário de Funcionamento:</strong><br>${hours}</div>`;
    }

    if (imageUrl && imageUrl !== '') {
        detailHTML += `<div class="business-photo" style="background-image: url('${imageUrl}');"></div>`;
    } 

    businessDetail.innerHTML = detailHTML;
}

function goBack() {
    if (currentPage === 'detail') {
        currentCategory ? showCategory(currentCategory) : goHome();
    } else {
        goHome();
    }
}

function goHome() {
    currentPage = 'home';
    currentCategory = null;
    currentBusiness = null;
    showPage('home-page');
}

let startX, startY;

document.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
});

document.addEventListener('touchend', function(e) {
    if (!startX || !startY) return;
    
    let endX = e.changedTouches[0].clientX;
    let endY = e.changedTouches[0].clientY;
    
    let diffX = startX - endX;
    let diffY = startY - endY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && diffX < -50) {
        if (currentPage !== 'home') {
            goBack();
        }
    }
    startX = null;
    startY = null;
});