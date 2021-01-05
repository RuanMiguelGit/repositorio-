const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('apitest', ()=>{
    it('it should check if the itens are in the fetch', async () =>{
        const fetcher = await getRepos('https://api.github.com/users/tryber/repos')
        expect(fetcher).toContain('sd-01-week4-5-project-todo-list')
        expect(fetcher).toContain('sd-01-week4-5-project-meme-generator')
    })
})
