const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    userName: '',
    userProfile: '',
    userFollowers: '',
    userFollowing: '',
    repositories: [],
    events: [],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
        this.userProfile = gitHubUser.html_url
        this.userFollowers = gitHubUser.followers
        this.userFollowing = gitHubUser.following
    },
    setRepositories(repositories){
        this.repositories = repositories
    },

    setEvents(events){
        this.events = events
    }
}

export { user }