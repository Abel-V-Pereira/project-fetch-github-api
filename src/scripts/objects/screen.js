const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
        <div class="info">
            <img src="${user.avatarUrl}" alt="Foto do perfil de usuário" />
            <div class="data">
                <h1><a href="${user.userProfile}" target="_blank">${user.name ?? 'Não possui nome cadastrado 😭'}</a></h1>
                <p>${user.bio ?? 'Não possui bio cadastrada 😭'}</p>
            </div>
            <div class="follow">
                <div>
                    <h4>👥 Seguidores</h4>
                    <p>${user.userFollowers}</p>
                </div>
                <div>
                    <h4>👥 Seguindo</h4>
                    <p>${user.userFollowing}</p>
                </div>
            </div>
        <div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `
            <li><a href="${repo.html_url}" target="_blank">
            <h3>${repo.name}</h3>
            <div class="repo-itens">
            <p>🍴${repo.forks_count}</p>
            <p>⭐${repo.stargazers_count}</p>
            <p>👀${repo.watchers_count}</p>
            <p>👨‍💻${repo.language ?? 'Não possui linguagem'}</p></div>
            </a></li>`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositórios</h2>
                <ul>${repositoriesItens}</ul>
            </div>`
        }

        let eventsItens = ''
        user.events.forEach(event => eventsItens += `
            <li><h4>${event.repo.name}</h4> - <p>${event.payload.commits && event.payload.commits.length > 0 ? event.payload.commits[0].message : 'Não possui mensagem de commit'}</p></li>`)

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Eventos</h2>
                <ul>${eventsItens}</ul>
            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = '<h3>Usuário não encontrado</h3>'
    }
}

export { screen }