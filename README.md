# Lord of The Rings - Character Bios

## React Props Exercise

### App:

- [x] Import the characters from `data.js` file into `App.js`
- [x] Create a components folder inside the src folder
- [x] Create `Header`, `CharacterList`, `Character`, `QuoteList`, and `Quote` components inside components folder
- [x] Pass the characters from the `data.js` file to the `CharacterList` component (How do we pass information from one component to another?)
- [x] `Header` and `CharacterList` components should be children of the `div` in the App's JSX

### Header:

- [x] The `Header` component should return a `div` with the className "header"
- [x] Inside the `div`, there should be:
  - [x] `h1` with text "Lord of The Rings"
  - [x] `h2` with text "Character Bios"

### CharacterList:

- [x] The `CharacterList` component should return a `div` with the className "characters-flex"
- [x] Create a variable that stores an array of `Character` components
- [x] Use props to pass character data to `Character` component
- [x] Use a key in the `Character` component (use crypto or uuid)
- [x] Display this array of `Character` components in the JSX

### Character:

- [x] Destructure prop into variables
- [x] Parent `div` with className "character"
- [x] Inside the `div`, there should be:
  - [x] `img` with `image` as `src` and `alt` equal to `Character Portrait of ${name}`
  - [x] `h2` for `name`
  - [x] `p` for `race`
  - [x] `p` for `status`
  - [x] `p` for `weapon`
  - [x] `QuoteList` component passing `quotes` to the `QuoteList`

### QuoteList:

- [x] Destructure prop into variable `quotes`
- [x] `QuoteList` should return a `ul` element with the className "quotes"
- [ ] Create variable that stores an array of Quotes components
- [ ] Use props to pass quote data to `Quote` component
- [ ] Use a key in the `Quote` component (use crypto or uuid)
- [ ] Display this array of `Quote` components in the JSX

### Quote:

- [ ] Destructure prop into variable `quote`
- [ ] Return a single `div` with the className "quote", with the contents of the `quote` inside

### Stretch Goals:

- [ ] Use conditional rendering in the `Character` component using a `showQuotes` prop to show/hide quotes for each character
- [ ] Default to showing quotes for all characters, unless set to `false`
