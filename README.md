# Expo's useFonts Hook Not Loading Custom Fonts

This repository demonstrates a bug where Expo's `useFonts` hook fails to load custom fonts, resulting in a blank screen before the fonts are loaded.  The issue arises even when the font files are correctly placed and referenced.

## Bug Description

The provided `bug.js` file showcases a simple app attempting to load a custom font using `useFonts`. Despite following the standard process for font loading, the app does not render the text until the component has fully mounted, and only then is the text rendered, sometimes never showing up. This behavior is inconsistent and frustrating. This behavior does not align with expected functionality. 

## Solution

The `bugSolution.js` file offers a workaround involving explicit font loading and state management. This approach ensures the app renders correctly, even before the fonts are fully loaded.

## Steps to Reproduce

1. Clone this repository.
2. Run `expo start`.
3. Observe the blank screen before the fonts load.
4. Compare the original and fixed code to understand the resolution.

## Additional Notes

While the provided solution works, it highlights a potential issue in Expo's `useFonts` implementation. This bug report aims to help improve the robustness of Expo's font loading functionality.