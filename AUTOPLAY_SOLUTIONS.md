# Chromium Autoplay Solutions Research

## Current Problem
The video implementation works perfectly in Safari but Chromium browsers (Arc, Chrome, Edge) block autoplay even with `muted` attribute due to strict autoplay policies.

## Research Findings

### Browser Autoplay Policies
- **Chrome 66+**: Videos must be muted AND require user interaction in many cases
- **Chromium-based browsers**: Even stricter policies than Chrome
- **Safari**: More lenient - allows autoplay for muted videos
- **Mobile browsers**: Almost always require user interaction

### Advanced Video Player Solutions

#### 1. React Player
- **Pros**: 
  - Better autoplay handling than native video
  - `light` prop shows thumbnail until user clicks
  - Supports multiple fallback strategies
  - Mobile-aware implementation
- **Cons**: 
  - Adds bundle size
  - May not solve Chromium restrictions entirely
- **Key Features**:
  - `muted={true}` for autoplay compliance
  - `light` prop for click-to-play functionality
  - `onClickPreview` callback for user interaction tracking

#### 2. Video.js
- **Pros**:
  - Industry standard with robust autoplay handling
  - Extensive plugin ecosystem
  - Better cross-browser compatibility
- **Cons**:
  - More complex integration
  - Larger footprint than React Player

### Autoplay Workaround Strategies

#### 1. User Interaction Detection
```javascript
// Track any user interaction on the page
let userHasInteracted = false;
const trackUserInteraction = () => {
  userHasInteracted = true;
  document.removeEventListener('click', trackUserInteraction);
  document.removeEventListener('touchstart', trackUserInteraction);
  document.removeEventListener('keydown', trackUserInteraction);
};

document.addEventListener('click', trackUserInteraction);
document.addEventListener('touchstart', trackUserInteraction);  
document.addEventListener('keydown', trackUserInteraction);
```

#### 2. Intersection Observer + User Interaction
```javascript
// Only attempt autoplay after user interaction + video in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && userHasInteracted) {
      attemptAutoplay(entry.target);
    }
  });
});
```

#### 3. Progressive Enhancement
- Start with poster image/thumbnail
- Show play button overlay
- Attempt autoplay after user interaction
- Fallback gracefully if autoplay fails

## Recommended Solution: Multi-Layered Approach

### Phase 1: React Player Implementation
1. Install and integrate React Player
2. Use `light` mode for click-to-play
3. Implement user interaction detection
4. Add intersection observer for viewport-based triggering

### Phase 2: Enhanced Fallbacks
1. Custom poster image with play button
2. User interaction tracking across the page  
3. Autoplay retry mechanism
4. Mobile-specific handling

### Phase 3: Advanced Features
1. Preload optimization
2. Media Source Extensions (MSE) if needed
3. Service worker caching strategies
4. Analytics and error tracking

## Implementation Priority
1. **High**: React Player with light mode (immediate improvement)
2. **Medium**: User interaction detection system
3. **Medium**: Intersection observer integration  
4. **Low**: Advanced MSE/service worker features

## Code Architecture
- Keep existing responsive scaling behavior
- Maintain iPhone bezel overlay effect
- Preserve video positioning calculations
- Add graceful degradation for all browsers
- Implement comprehensive error handling

## Testing Strategy
- Test in Safari (should continue working)
- Test in Chrome/Arc/Edge (primary target)
- Test on mobile devices
- Test with various user interaction patterns
- Test fallback mechanisms
