/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
          'm1': '-0.25rem',
          'm2': '-0.5rem',
          'm3': '-0.75rem',
          'm4': '-1rem',
          'm5': '-1.25rem',
          'm6': '-1.5rem',
          'm7': '-1.75rem',
          'm8': '-2rem',
          'm9': '-2.25rem',
          'm10': '-2.5rem',
          'm11': '-2.75rem',
          'm12': '-3rem',
          'm13': '-3.25rem',
          'm14': '-3.5rem',
          'm15': '-3.75rem',
          'm16': '-4rem',
          'm17': '-4.25rem',
          'm18': '-4.5rem',
          'm19': '-4.75rem',
          'm20': '-5rem',
          'm21': '-5.25rem',
          'm22': '-5.5rem',
          'm23': '-5.75rem',
          'm24': '-6rem',
          'm25': '-6.25rem',
          'm26': '-6.5rem',
          'm27': '-6.75rem',
          'm28': '-7rem',
          'm29': '-7.25rem',
          'm30': '-7.5rem',
          'm31': '-7.75rem',
          'm32': '-8rem',
          'm33': '-8.25rem',
          'm34': '-8.5rem',
          'm35': '-8.75rem',
          'm36': '-9rem',
          'm37': '-9.25rem',
          'm38': '-9.5rem',
          'm39': '-9.75rem',
          'm40': '-10rem',
          'm41': '-10.25rem',
          'm42': '-10.5rem',
          'm43': '-10.75rem',
          'm44': '-11rem',
          'm45': '-11.25rem',
          '1px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          '11': '2.75rem',
          '12': '3rem',
          '13': '3.25rem',
          '14': '3.5rem',
          '15': '3.75rem',
          '16': '4rem',
          '17': '4.25rem',
          '18': '4.5rem',
          '19': '4.75rem',
          '20': '5rem',
          '21': '5.25rem',
          '22': '5.5rem',
          '23': '5.75rem',
          '24': '6rem',
          '25': '6.25rem',
          '26': '6.5rem',
          '27': '6.75rem',
          '28': '7rem',
          '29': '7.25rem',
          '30': '7.5rem',
          '31': '7.75rem',
          '32': '8rem',
          '33': '8.25rem',
          '34': '8.5rem',
          '35': '8.75rem',
          '36': '9rem',
          '37': '9.25rem',
          '38': '9.5rem',
          '39': '9.75rem',
          '40': '10rem',
          '41': '10.25rem',
          '42': '10.5rem',
          '43': '10.75rem',
          '44': '11rem',
          '45': '11.25rem',
          '46': '11.5rem',
          '47': '11.75rem',
          '48': '12rem',
          '49': '12.25rem',
          '50': '12.5rem',
          '51': '12.75rem',
          '52': '13rem',
          '53': '13.25rem',
          '54': '13.5rem',
          '55': '13.75rem',
          '56': '14rem',
          '57': '14.25rem',
          '58': '14.5rem',
          '59': '14.75rem',
          '60': '15rem',
          '61': '15.25rem',
          '62': '15.5rem',
          '63': '15.75rem',
          '64': '16rem',
          '65': '16.25rem',
          '66': '16.5rem',
          '67': '16.75rem',
          '68': '17rem',
          '69': '17.25rem',
          '70': '17.5rem',
          '71': '17.75rem',
          '72': '18rem',
          '73': '18.25rem',
          '74': '18.5rem',
          '75': '18.75rem',
          '76': '19rem',
          '77': '19.25rem',
          '78': '19.5rem',
          '79': '19.75rem',
          '80': '20rem',
          '81': '20.25rem',
          '82': '20.5rem',
          '83': '20.75rem',
          '84': '21rem',
          '85': '21.25rem',
          '86': '21.5rem',
          '87': '21.75rem',
          '88': '22rem',
          '89': '22.25rem',
          '90': '22.5rem',
          '91': '22.75rem',
          '92': '23rem',
          '93': '23.25rem',
          '94': '23.5rem',
          '95': '23.75rem',
          '96': '24rem',
          '97': '24.25rem',
          '98': '24.5rem',
          '99': '24.75rem',
          '100': '25rem',
          '100vw': '100vw',
          '1rem': '1rem',
          '2rem': '2rem',
          '3rem': '3rem',
          '4rem': '4rem',
          '5rem': '5rem',
          '6rem': '6rem',
          '7rem': '7rem',
          '8rem': '8rem',
          '9rem': '9rem',
          '10rem': '10rem',
          '11rem': '11rem',
          '12rem': '12rem',
          '13rem': '13rem',
          '14rem': '14rem',
          '15rem': '15rem',
          '16rem': '16rem',
          '17rem': '17rem',
          '18rem': '18rem',
          '19rem': '19rem',
          '20rem': '20rem',
          '21rem': '21rem',
          '22rem': '22rem',
          '23rem': '23rem',
          '24rem': '24rem',
          '25rem': '25rem',
          '26rem': '26rem',
          '27rem': '27rem',
          '28rem': '28rem',
          '29rem': '29rem',
          '30rem': '30rem',
          '31rem': '31rem',
          '32rem': '32rem',
          '33rem': '33rem',
          '34rem': '34rem',
          '35rem': '35rem',
          '36rem': '36rem',
          '37rem': '37rem',
          '38rem': '38rem',
          '39rem': '39rem',
          '40rem': '40rem',
          '41rem': '41rem',
          '42rem': '42rem',
          '43rem': '43rem',
          '44rem': '44rem',
          '45rem': '45rem',
          '46rem': '46rem',
          '47rem': '47rem',
          '48rem': '48rem',
          '49rem': '49rem',
          '50rem': '50rem',
          '51rem': '51rem',
          '52rem': '52rem',
          '53rem': '53rem',
          '54rem': '54rem',
          '55rem': '55rem',
          '56rem': '56rem',
          '57rem': '57rem',
          '58rem': '58rem',
          '59rem': '59rem',
          '60rem': '60rem',
          '61rem': '61rem',
          '62rem': '62rem',
          '63rem': '63rem',
          '64rem': '64rem',
          '65rem': '65rem',
          '66rem': '66rem',
          '67rem': '67rem',
          '68rem': '68rem',
          '69rem': '69rem',
          '70rem': '70rem',
          '71rem': '71rem',
          '72rem': '72rem',
          '73rem': '73rem',
          '74rem': '74rem',
          '75rem': '75rem',
          '76rem': '76rem',
          '77rem': '77rem',
          '78rem': '78rem',
          '79rem': '79rem',
          '80rem': '80rem',
          '81rem': '81rem',
          '82rem': '82rem',
          '83rem': '83rem',
          '84rem': '84rem',
          '85rem': '85rem',
          '86rem': '86rem',
          '87rem': '87rem',
          '88rem': '88rem',
          '89rem': '89rem',
          '90rem': '90rem',
          '91rem': '91rem',
          '92rem': '92rem',
          '93rem': '93rem',
          '94rem': '94rem',
          '95rem': '95rem',
          '96rem': '96rem',
          '97rem': '97rem',
          '98rem': '98rem',
          '99rem': '99rem',
          '100rem': '100rem',
      },
      borderWidth: {
          DEFAULT: '1px',
          '1': '1px',
      },
      backgroundOpacity: {
          '10': '0.1',
          '20': '0.2',
          '90': '0.9',
          '95': '0.95',
      },
      width: {
          '1%': '1%',
          '2%': '2%',
          '3%': '3%',
          '4%': '4%',
          '5%': '5%',
          '6%': '6%',
          '7%': '7%',
          '8%': '8%',
          '9%': '9%',
          '10%': '10%',
          '11%': '11%',
          '12%': '12%',
          '13%': '13%',
          '14%': '14%',
          '15%': '15%',
          '16%': '16%',
          '17%': '17%',
          '18%': '18%',
          '19%': '19%',
          '20%': '20%',
          '21%': '21%',
          '22%': '22%',
          '23%': '23%',
          '24%': '24%',
          '25%': '25%',
          '26%': '26%',
          '27%': '27%',
          '28%': '28%',
          '29%': '29%',
          '30%': '30%',
          '31%': '31%',
          '32%': '32%',
          '33%': '33%',
          '34%': '34%',
          '35%': '35%',
          '36%': '36%',
          '37%': '37%',
          '38%': '38%',
          '39%': '39%',
          '40%': '40%',
          '41%': '41%',
          '42%': '42%',
          '43%': '43%',
          '44%': '44%',
          '45%': '45%',
          '46%': '46%',
          '47%': '47%',
          '48%': '48%',
          '49%': '49%',
          '50%': '50%',
          '51%': '51%',
          '52%': '52%',
          '53%': '53%',
          '54%': '54%',
          '55%': '55%',
          '56%': '56%',
          '57%': '57%',
          '58%': '58%',
          '59%': '59%',
          '60%': '60%',
          '61%': '61%',
          '62%': '62%',
          '63%': '63%',
          '64%': '64%',
          '65%': '65%',
          '66%': '66%',
          '67%': '67%',
          '68%': '68%',
          '69%': '69%',
          '70%': '70%',
          '71%': '71%',
          '72%': '72%',
          '73%': '73%',
          '74%': '74%',
          '75%': '75%',
          '76%': '76%',
          '77%': '77%',
          '78%': '78%',
          '79%': '79%',
          '80%': '80%',
          '81%': '81%',
          '82%': '82%',
          '83%': '83%',
          '84%': '84%',
          '85%': '85%',
          '86%': '86%',
          '87%': '87%',
          '88%': '88%',
          '89%': '89%',
          '90%': '90%',
          '91%': '91%',
          '92%': '92%',
          '93%': '93%',
          '94%': '94%',
          '95%': '95%',
          '96%': '96%',
          '97%': '97%',
          '98%': '98%',
          '99%': '99%',
          '100%': '100%',
          'auto': 'auto',
          '1px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          '11': '2.75rem',
          '12': '3rem',
          '13': '3.25rem',
          '14': '3.5rem',
          '15': '3.75rem',
          '16': '4rem',
          '17': '4.25rem',
          '18': '4.5rem',
          '19': '4.75rem',
          '20': '5rem',
          '21': '5.25rem',
          '22': '5.5rem',
          '23': '5.75rem',
          '24': '6rem',
          '25': '6.25rem',
          '26': '6.5rem',
          '27': '6.75rem',
          '28': '7rem',
          '29': '7.25rem',
          '30': '7.5rem',
          '31': '7.75rem',
          '32': '8rem',
          '33': '8.25rem',
          '34': '8.5rem',
          '35': '8.75rem',
          '36': '9rem',
          '37': '9.25rem',
          '38': '9.5rem',
          '39': '9.75rem',
          '40': '10rem',
          '41': '10.25rem',
          '42': '10.5rem',
          '43': '10.75rem',
          '44': '11rem',
          '45': '11.25rem',
          '46': '11.5rem',
          '47': '11.75rem',
          '48': '12rem',
          '49': '12.25rem',
          '50': '12.5rem',
          '51': '12.75rem',
          '52': '13rem',
          '53': '13.25rem',
          '54': '13.5rem',
          '55': '13.75rem',
          '56': '14rem',
          '57': '14.25rem',
          '58': '14.5rem',
          '59': '14.75rem',
          '60': '15rem',
          '61': '15.25rem',
          '62': '15.5rem',
          '63': '15.75rem',
          '64': '16rem',
          '65': '16.25rem',
          '66': '16.5rem',
          '67': '16.75rem',
          '68': '17rem',
          '69': '17.25rem',
          '70': '17.5rem',
          '71': '17.75rem',
          '72': '18rem',
          '73': '18.25rem',
          '74': '18.5rem',
          '75': '18.75rem',
          '76': '19rem',
          '77': '19.25rem',
          '78': '19.5rem',
          '79': '19.75rem',
          '80': '20rem',
          '81': '20.25rem',
          '82': '20.5rem',
          '83': '20.75rem',
          '84': '21rem',
          '85': '21.25rem',
          '86': '21.5rem',
          '87': '21.75rem',
          '88': '22rem',
          '89': '22.25rem',
          '90': '22.5rem',
          '91': '22.75rem',
          '92': '23rem',
          '93': '23.25rem',
          '94': '23.5rem',
          '95': '23.75rem',
          '96': '24rem',
          '97': '24.25rem',
          '98': '24.5rem',
          '99': '24.75rem',
          '100': '25rem',
          '100vw': '100vw',
          '1rem': '1rem',
          '2rem': '2rem',
          '3rem': '3rem',
          '4rem': '4rem',
          '5rem': '5rem',
          '6rem': '6rem',
          '7rem': '7rem',
          '8rem': '8rem',
          '9rem': '9rem',
          '10rem': '10rem',
          '11rem': '11rem',
          '12rem': '12rem',
          '13rem': '13rem',
          '14rem': '14rem',
          '15rem': '15rem',
          '16rem': '16rem',
          '17rem': '17rem',
          '18rem': '18rem',
          '19rem': '19rem',
          '20rem': '20rem',
          '21rem': '21rem',
          '22rem': '22rem',
          '23rem': '23rem',
          '24rem': '24rem',
          '25rem': '25rem',
          '26rem': '26rem',
          '27rem': '27rem',
          '28rem': '28rem',
          '29rem': '29rem',
          '30rem': '30rem',
          '31rem': '31rem',
          '32rem': '32rem',
          '33rem': '33rem',
          '34rem': '34rem',
          '35rem': '35rem',
          '36rem': '36rem',
          '37rem': '37rem',
          '38rem': '38rem',
          '39rem': '39rem',
          '40rem': '40rem',
          '41rem': '41rem',
          '42rem': '42rem',
          '43rem': '43rem',
          '44rem': '44rem',
          '45rem': '45rem',
          '46rem': '46rem',
          '47rem': '47rem',
          '48rem': '48rem',
          '49rem': '49rem',
          '50rem': '50rem',
          '51rem': '51rem',
          '52rem': '52rem',
          '53rem': '53rem',
          '54rem': '54rem',
          '55rem': '55rem',
          '56rem': '56rem',
          '57rem': '57rem',
          '58rem': '58rem',
          '59rem': '59rem',
          '60rem': '60rem',
          '61rem': '61rem',
          '62rem': '62rem',
          '63rem': '63rem',
          '64rem': '64rem',
          '65rem': '65rem',
          '66rem': '66rem',
          '67rem': '67rem',
          '68rem': '68rem',
          '69rem': '69rem',
          '70rem': '70rem',
          '71rem': '71rem',
          '72rem': '72rem',
          '73rem': '73rem',
          '74rem': '74rem',
          '75rem': '75rem',
          '76rem': '76rem',
          '77rem': '77rem',
          '78rem': '78rem',
          '79rem': '79rem',
          '80rem': '80rem',
          '81rem': '81rem',
          '82rem': '82rem',
          '83rem': '83rem',
          '84rem': '84rem',
          '85rem': '85rem',
          '86rem': '86rem',
          '87rem': '87rem',
          '88rem': '88rem',
          '89rem': '89rem',
          '90rem': '90rem',
          '91rem': '91rem',
          '92rem': '92rem',
          '93rem': '93rem',
          '94rem': '94rem',
          '95rem': '95rem',
          '96rem': '96rem',
          '97rem': '97rem',
          '98rem': '98rem',
          '99rem': '99rem',
          '100rem': '100rem',
          '1vw': '1vw',
          '2vw': '2vw',
          '3vw': '3vw',
          '4vw': '4vw',
          '5vw': '5vw',
          '6vw': '6vw',
          '7vw': '7vw',
          '8vw': '8vw',
          '9vw': '9vw',
          '10vw': '10vw',
          '11vw': '11vw',
          '12vw': '12vw',
          '13vw': '13vw',
          '14vw': '14vw',
          '15vw': '15vw',
          '16vw': '16vw',
          '17vw': '17vw',
          '18vw': '18vw',
          '19vw': '19vw',
          '20vw': '20vw',
          '21vw': '21vw',
          '22vw': '22vw',
          '23vw': '23vw',
          '24vw': '24vw',
          '25vw': '25vw',
          '26vw': '26vw',
          '27vw': '27vw',
          '28vw': '28vw',
          '29vw': '29vw',
          '30vw': '30vw',
          '31vw': '31vw',
          '32vw': '32vw',
          '33vw': '33vw',
          '34vw': '34vw',
          '35vw': '35vw',
          '36vw': '36vw',
          '37vw': '37vw',
          '38vw': '38vw',
          '39vw': '39vw',
          '40vw': '40vw',
          '41vw': '41vw',
          '42vw': '42vw',
          '43vw': '43vw',
          '44vw': '44vw',
          '45vw': '45vw',
          '46vw': '46vw',
          '47vw': '47vw',
          '48vw': '48vw',
          '49vw': '49vw',
          '50vw': '50vw',
          '51vw': '51vw',
          '52vw': '52vw',
          '53vw': '53vw',
          '54vw': '54vw',
          '55vw': '55vw',
          '56vw': '56vw',
          '57vw': '57vw',
          '58vw': '58vw',
          '59vw': '59vw',
          '60vw': '60vw',
          '61vw': '61vw',
          '62vw': '62vw',
          '63vw': '63vw',
          '64vw': '64vw',
          '65vw': '65vw',
          '66vw': '66vw',
          '67vw': '67vw',
          '68vw': '68vw',
          '69vw': '69vw',
          '70vw': '70vw',
          '71vw': '71vw',
          '72vw': '72vw',
          '73vw': '73vw',
          '74vw': '74vw',
          '75vw': '75vw',
          '76vw': '76vw',
          '77vw': '77vw',
          '78vw': '78vw',
          '79vw': '79vw',
          '80vw': '80vw',
          '81vw': '81vw',
          '82vw': '82vw',
          '83vw': '83vw',
          '84vw': '84vw',
          '85vw': '85vw',
          '86vw': '86vw',
          '87vw': '87vw',
          '88vw': '88vw',
          '89vw': '89vw',
          '90vw': '90vw',
          '91vw': '91vw',
          '92vw': '92vw',
          '93vw': '93vw',
          '94vw': '94vw',
          '95vw': '95vw',
          '96vw': '96vw',
          '97vw': '97vw',
          '98vw': '98vw',
          '99vw': '99vw',
          '100vw': '100vw'
      },
      height: {
          'auth-window': '353px',
          'main-window': '798px',
          '1%': '1%',
          '2%': '2%',
          '3%': '3%',
          '4%': '4%',
          '5%': '5%',
          '6%': '6%',
          '7%': '7%',
          '8%': '8%',
          '9%': '9%',
          '10%': '10%',
          '11%': '11%',
          '12%': '12%',
          '13%': '13%',
          '14%': '14%',
          '15%': '15%',
          '16%': '16%',
          '17%': '17%',
          '18%': '18%',
          '19%': '19%',
          '20%': '20%',
          '21%': '21%',
          '22%': '22%',
          '23%': '23%',
          '24%': '24%',
          '25%': '25%',
          '26%': '26%',
          '27%': '27%',
          '28%': '28%',
          '29%': '29%',
          '30%': '30%',
          '31%': '31%',
          '32%': '32%',
          '33%': '33%',
          '34%': '34%',
          '35%': '35%',
          '36%': '36%',
          '37%': '37%',
          '38%': '38%',
          '39%': '39%',
          '40%': '40%',
          '41%': '41%',
          '42%': '42%',
          '43%': '43%',
          '44%': '44%',
          '45%': '45%',
          '46%': '46%',
          '47%': '47%',
          '48%': '48%',
          '49%': '49%',
          '50%': '50%',
          '51%': '51%',
          '52%': '52%',
          '53%': '53%',
          '54%': '54%',
          '55%': '55%',
          '56%': '56%',
          '57%': '57%',
          '58%': '58%',
          '59%': '59%',
          '60%': '60%',
          '61%': '61%',
          '62%': '62%',
          '63%': '63%',
          '64%': '64%',
          '65%': '65%',
          '66%': '66%',
          '67%': '67%',
          '68%': '68%',
          '69%': '69%',
          '70%': '70%',
          '71%': '71%',
          '72%': '72%',
          '73%': '73%',
          '74%': '74%',
          '75%': '75%',
          '76%': '76%',
          '77%': '77%',
          '78%': '78%',
          '79%': '79%',
          '80%': '80%',
          '81%': '81%',
          '82%': '82%',
          '83%': '83%',
          '84%': '84%',
          '85%': '85%',
          '86%': '86%',
          '87%': '87%',
          '88%': '88%',
          '89%': '89%',
          '90%': '90%',
          '91%': '91%',
          '92%': '92%',
          '93%': '93%',
          '94%': '94%',
          '95%': '95%',
          '96%': '96%',
          '97%': '97%',
          '98%': '98%',
          '99%': '99%',
          '100%': '100%',
          'auto': 'auto',
          '1px': '1px',
          '1': '0.25rem',
          '2': '0.5rem',
          '3': '0.75rem',
          '4': '1rem',
          '5': '1.25rem',
          '6': '1.5rem',
          '7': '1.75rem',
          '8': '2rem',
          '9': '2.25rem',
          '10': '2.5rem',
          '11': '2.75rem',
          '12': '3rem',
          '13': '3.25rem',
          '14': '3.5rem',
          '15': '3.75rem',
          '16': '4rem',
          '17': '4.25rem',
          '18': '4.5rem',
          '19': '4.75rem',
          '20': '5rem',
          '21': '5.25rem',
          '22': '5.5rem',
          '23': '5.75rem',
          '24': '6rem',
          '25': '6.25rem',
          '26': '6.5rem',
          '27': '6.75rem',
          '28': '7rem',
          '29': '7.25rem',
          '30': '7.5rem',
          '31': '7.75rem',
          '32': '8rem',
          '33': '8.25rem',
          '34': '8.5rem',
          '35': '8.75rem',
          '36': '9rem',
          '37': '9.25rem',
          '38': '9.5rem',
          '39': '9.75rem',
          '40': '10rem',
          '41': '10.25rem',
          '42': '10.5rem',
          '43': '10.75rem',
          '44': '11rem',
          '45': '11.25rem',
          '46': '11.5rem',
          '47': '11.75rem',
          '48': '12rem',
          '49': '12.25rem',
          '50': '12.5rem',
          '51': '12.75rem',
          '52': '13rem',
          '53': '13.25rem',
          '54': '13.5rem',
          '55': '13.75rem',
          '56': '14rem',
          '57': '14.25rem',
          '58': '14.5rem',
          '59': '14.75rem',
          '60': '15rem',
          '61': '15.25rem',
          '62': '15.5rem',
          '63': '15.75rem',
          '64': '16rem',
          '65': '16.25rem',
          '66': '16.5rem',
          '67': '16.75rem',
          '68': '17rem',
          '69': '17.25rem',
          '70': '17.5rem',
          '71': '17.75rem',
          '72': '18rem',
          '73': '18.25rem',
          '74': '18.5rem',
          '75': '18.75rem',
          '76': '19rem',
          '77': '19.25rem',
          '78': '19.5rem',
          '79': '19.75rem',
          '80': '20rem',
          '81': '20.25rem',
          '82': '20.5rem',
          '83': '20.75rem',
          '84': '21rem',
          '85': '21.25rem',
          '86': '21.5rem',
          '87': '21.75rem',
          '88': '22rem',
          '89': '22.25rem',
          '90': '22.5rem',
          '91': '22.75rem',
          '92': '23rem',
          '93': '23.25rem',
          '94': '23.5rem',
          '95': '23.75rem',
          '96': '24rem',
          '97': '24.25rem',
          '98': '24.5rem',
          '99': '24.75rem',
          '100': '25rem',
          '100vh': '100vh',
          '1rem': '1rem',
          '2rem': '2rem',
          '3rem': '3rem',
          '4rem': '4rem',
          '5rem': '5rem',
          '6rem': '6rem',
          '7rem': '7rem',
          '8rem': '8rem',
          '9rem': '9rem',
          '10rem': '10rem',
          '11rem': '11rem',
          '12rem': '12rem',
          '13rem': '13rem',
          '14rem': '14rem',
          '15rem': '15rem',
          '16rem': '16rem',
          '17rem': '17rem',
          '18rem': '18rem',
          '19rem': '19rem',
          '20rem': '20rem',
          '21rem': '21rem',
          '22rem': '22rem',
          '23rem': '23rem',
          '24rem': '24rem',
          '25rem': '25rem',
          '26rem': '26rem',
          '27rem': '27rem',
          '28rem': '28rem',
          '29rem': '29rem',
          '30rem': '30rem',
          '31rem': '31rem',
          '32rem': '32rem',
          '33rem': '33rem',
          '34rem': '34rem',
          '35rem': '35rem',
          '36rem': '36rem',
          '37rem': '37rem',
          '38rem': '38rem',
          '39rem': '39rem',
          '40rem': '40rem',
          '41rem': '41rem',
          '42rem': '42rem',
          '43rem': '43rem',
          '44rem': '44rem',
          '45rem': '45rem',
          '46rem': '46rem',
          '47rem': '47rem',
          '48rem': '48rem',
          '49rem': '49rem',
          '50rem': '50rem',
          '51rem': '51rem',
          '52rem': '52rem',
          '53rem': '53rem',
          '54rem': '54rem',
          '55rem': '55rem',
          '56rem': '56rem',
          '57rem': '57rem',
          '58rem': '58rem',
          '59rem': '59rem',
          '60rem': '60rem',
          '61rem': '61rem',
          '62rem': '62rem',
          '63rem': '63rem',
          '64rem': '64rem',
          '65rem': '65rem',
          '66rem': '66rem',
          '67rem': '67rem',
          '68rem': '68rem',
          '69rem': '69rem',
          '70rem': '70rem',
          '71rem': '71rem',
          '72rem': '72rem',
          '73rem': '73rem',
          '74rem': '74rem',
          '75rem': '75rem',
          '76rem': '76rem',
          '77rem': '77rem',
          '78rem': '78rem',
          '79rem': '79rem',
          '80rem': '80rem',
          '81rem': '81rem',
          '82rem': '82rem',
          '83rem': '83rem',
          '84rem': '84rem',
          '85rem': '85rem',
          '86rem': '86rem',
          '87rem': '87rem',
          '88rem': '88rem',
          '89rem': '89rem',
          '90rem': '90rem',
          '91rem': '91rem',
          '92rem': '92rem',
          '93rem': '93rem',
          '94rem': '94rem',
          '95rem': '95rem',
          '96rem': '96rem',
          '97rem': '97rem',
          '98rem': '98rem',
          '99rem': '99rem',
          '100rem': '100rem',
      }
    }
  },
  plugins: [],
}
