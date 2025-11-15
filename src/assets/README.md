# Assets

Place your images, fonts, and other static assets here.

## Structure

```
assets/
├── images/          # PNG, JPG, SVG images
│   ├── logo.png
│   └── ...
└── fonts/           # Custom fonts
    ├── CustomFont-Regular.ttf
    └── ...
```

## Using Images

```typescript
import {Image} from 'react-native';

<Image source={require('@assets/images/logo.png')} />
```

## Adding Custom Fonts

1. Place font files in `assets/fonts/`
2. Link fonts:

### Android
Add to `android/app/build.gradle`:
```gradle
project.ext.react = [
    enableHermes: true,
    bundleAssetName: "index.android.bundle",
    entryFile: "index.js",
    bundleInDebug: false,
    bundleInRelease: true
]

apply from: "../../node_modules/react-native/react.gradle"

// Add this
project.ext.vectoricons = [
    iconFontNames: [ 'MaterialIcons.ttf', 'CustomFont.ttf' ]
]

apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```

### iOS
Create `react-native.config.js` in root:
```javascript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['./src/assets/fonts/'],
};
```

Then run:
```bash
npx react-native-asset
```

3. Use in styles:
```typescript
const styles = StyleSheet.create({
  text: {
    fontFamily: 'CustomFont-Regular',
  },
});
```

