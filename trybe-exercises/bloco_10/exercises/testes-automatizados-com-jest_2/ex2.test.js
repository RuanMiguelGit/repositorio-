const promiseme = require('./ex2')

const users = {
    4 : { name: 'Mark' },
    5 : { name: 'Paul' }
    };
    
    const findUserById = (id) => {
      return new Promise((resolve, reject) => {
          if (users[id]) {
            return resolve(users[id]);
          }
    
          return reject({ error: 'User with ' + id + ' not found.' });
      });
    }
    
    const getUserName = (userID) => {
      return findUserById(userID).then(user => user.name);
    }



describe('twofuncions', () =>{ 
    it('if the user is found', ()=>{
        expect.assertions(1)
        return getUserName(4).then(listnames => {
            expect(listnames).toEqual('Mark')
            // expect(listnames[1].nmae).toEqual('Paul')
        })
    })
        it('if the other user is found', ()=>{
            expect.assertions(1)
            return getUserName(5).then(listnames =>{
                expect(listnames).toEqual("Paul")
            })
        })
})

describe('error tester', ()=>{
    it('it should check if the user doesnt exist', () =>{
        expect.assertions(1)
        return getUserName(7).catch(error => {
            expect(error).toEqual({ error: 'User with 7 not found.' })
        })
    })
})
describe('test with async and await', ()=>{
    it('test with async and await', async () =>{
        const listnames  = await getUserName(5);
        expect(listnames).toEqual("Paul")
    })
})

describe('test the error', () =>{
    it('test if you can catch the error', async () =>{
        try {
            await getUserName(2);
        } catch(error) {
            expect(error).toEqual({ error: 'User with 2 not found.' })
        }
    })
})
