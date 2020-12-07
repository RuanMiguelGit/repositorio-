const messageDelay = () => Math.floor(Math.random() * 5000);

sendMarsTemperature = (value) => {
    return `Mars temperature is: ${value} degress Celsius`
}

const getMarsTemperature = (callback) => {
  const maxTemperature = 58;
    let total = Math.floor(Math.random() * maxTemperature);
    return callback(total)
};

// crie a função sendMarsTemperature abaixo
console.log(getMarsTemperature(sendMarsTemperature))

// console.log(sendMarsTemperature(getMarsTemperature)); // imprime "Mars temperature is: 20 degree Celsius", por exemplo