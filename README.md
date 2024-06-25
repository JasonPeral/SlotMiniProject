# SlotMiniProject

<p>This is a mini slot machine project that covers a lot of aspects of vanilla Javascript.</p>

<h2>Important functions for this application</h2>

### Randomizing symbols for each column
    const spin = () => {
        const symbols = [];
        for (const [symbol, count] of Object.entries(SYMBOL_COUNT)) {
            for (let i = 0; i < count; i++) {
                symbols.push(symbol);
            }
        }
        const reels = [];
        for (let i = 0; i < COLS; i++) {
            reels.push([])
            const reelSymbols = [...symbols];
            for (let j = 0; j < ROWS; j++) {
                const randomIndex = Math.floor(Math.random() * reelSymbols.length);
                const selectedSymbol = reelSymbols[randomIndex]
                reels[i].push(selectedSymbol)
                reelSymbols.splice(randomIndex, 1);
            }
        }
        return reels
    }

### Transposing each column to a row to be able to see any symbol match
    const transpose = (reels) => {
        const rows = [];
    
        for (let i = 0; i < ROWS; i++) {
            rows.push([])
            for (let j = 0; j < COLS; j++) {
                rows[i].push(reels[j][i])
            }
        }
        return rows;
    }


### Looping through transposed rows to find any match
      const getWinning = (rows, bet, lines) => {
      let winnings = 0;
  
      for (let row = 0; row < lines; row++) {
          const symbols = rows[row]
          let allSame = true;
  
          for (const symbol of symbols) {
              if (symbol != symbols[0]) {
                  allSame = false;
                  break;
              }
          }
          if (allSame) {
              winnings += bet * SYMBOL_VALUES[symbols[0]]
          }
      }
      return winnings
    }


### Putting it all together 
      const game = () => {
      let balance = deposit();
  
      while (true) {
          console.log(`You have a balance of $ ${balance}`);
  
  
          const numberOfLines = getNumberOfLines();
          const bet = getBet(balance, numberOfLines);
          balance -= bet * numberOfLines;
  
          const reels = spin()
          const rows = transpose(reels);
          printRows(rows);
          const winnings = getWinning(rows, bet, numberOfLines)
          balance += winnings;
          console.log(`You Won $ ${winnings.toString()}`);
  
          if (balance <= 0) {
              console.log("You ran out of money!")
              break;
          }
  
          const playAgain = prompt("Do you want to play again (y/n)?")
          if (playAgain != "y") break;
      }
    }
