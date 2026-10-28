# video-sharing-app
# Frame Video Sharing Homepage

Frame is a beginner-friendly video-sharing homepage made with HTML, CSS, and vanilla JavaScript. It features a dark navy design and sample videos from fictional creators. There is no backend or build setup required.

## Features

- Responsive homepage with a search bar and video-card grid
- Search video titles as you type
- Filter videos by All, Gaming, Music, Education, or Technology
- Like and unlike each video independently
- Open a video card to view its title, creator, and description
- Return to the video grid from the viewing section
- Keyboard support for opening video cards

## Technologies

- HTML for page structure and video-card content
- CSS for styling and responsive layouts
- Vanilla JavaScript for search, filters, likes, and the video viewer

## Run the website locally

1. Download or clone this project and open its folder in Visual Studio Code.
2. Make sure `index.html`, `styles.css`, and `script.js` are in the same folder.
3. To preview the site, install the **Live Server** extension in VS Code if needed.
4. In the VS Code Explorer, right-click `index.html` and select **Open with Live Server**. Your browser should open the local preview.
5. Keep VS Code open while using the Live Server preview. Alternatively, you can open `index.html` directly in a browser, though Live Server may make refreshing changes more convenient.

The sample thumbnails and sample video are hosted online, so they require an internet connection.

## Use the homepage

### Search

Type in the search bar to find videos by title. The list updates as you type. Clear the search text to show videos that match the selected category again.

### Category filters

Select **All**, **Gaming**, **Music**, **Education**, or **Technology** to filter the cards. Search and category filters work together: a video must match both to appear. Select **All** to remove the category restriction.

### Like buttons

Select a card's like button to add a like. Select it again to remove your like. Each card has its own button and count. Likes are held in the page while it is open and reset to their starting counts when the page reloads.

### Video viewer

Select a video card to open its viewing section and see the title, creator, and description. The viewer plays the same public sample clip for every card; it is not the actual video described by each card. Select **Back to videos** to return to the grid.