function addFooter() {

    const footer = document.createElement('footer');
    footer.className = 'footer';

    const footerSocial = document.createElement('div');
    footerSocial.className = 'icon-socialmedia';
    const socialLink = document.createElement('a');
    socialLink.href = 'https://github.com/jmgaitan';
    const socialImage = document.createElement('img');
    socialImage.src = './images/icons/github-mark-white.svg';
    socialImage.alt = 'Perfil de GitHub';
    socialLink.appendChild(socialImage);
    footerSocial.appendChild(socialLink);
    footer.appendChild(footerSocial);

    const linkContainer = document.createElement('span');
    linkContainer.className = 'link__container';
    const nosotrosLink = document.createElement('a');
    nosotrosLink.href = '/nosotros.html';
    nosotrosLink.className = 'footer-link';
    nosotrosLink.textContent = 'Nosotros';
    const contactoLink = document.createElement('a');
    contactoLink.href = '/contacto.html';
    contactoLink.className = 'footer-link';
    contactoLink.textContent = 'Contacto';

    linkContainer.appendChild(nosotrosLink);
    linkContainer.appendChild(contactoLink);
    footer.appendChild(linkContainer);

    document.body.appendChild(footer);
}

