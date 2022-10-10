# MRI FileManager
This is a File manager for react or nextjs.

# Install

```
npm i @mdrakibul8001/filemanager

```

# Usage

```
import { FileSelectButton, MRIfileManagerRender, MRI_Uploader } from '@mdrakibul8001/filemanager';

```

```
1. Wrap your component with this MRIfileManagerRender  where you want to integrate file-manager.
2. Make sure MRI_Uploader inside modal body.
3. In your form file selecting button should be FileSelectButton.

```

```
const [roomType, setRoomType] = useState({
    upload_files:[],
    upload_ids:[],
});

const [arr, setArr]=useState([]);
const [filesArr, setFilesArr]=useState([]);

// start File manager section

  //function set selected files ids
  const setFilesData=(data)=>{
    for (let i = 0; i < data.length; i++) {
      filesArr.push(data[i]);
    }

    setRoomType(prev=>({
      ...prev, upload_files:filesArr
    }))
  }

    //function set selected files ids
    const setIds=(Ids)=>{
  
      for (let i = 0; i < Ids.length; i++) {
         arr.push(Ids[i]);
      }
  
      setRoomType(prev=>({
        ...prev, upload_ids:arr
      }))

    };
  
    const removePhoto = (id) => {
      //Ids array remove
      let filtered = arr.filter(function(item){ 
        return item != id;
      });

      setArr(filtered);
  
      setRoomType(prev=>({
        ...prev, upload_ids:filtered
      }))

      //remove files array of objects
      const newList = filesArr.filter((item) => item.id !== id);
      setFilesArr(newList);
  
      setRoomType(prev=>({
        ...prev, upload_files:newList
      }))
  
    }
// End File manager section

```


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
