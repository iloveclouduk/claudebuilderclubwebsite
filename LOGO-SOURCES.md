# Logo Sources and Brand Assets

This document tracks the official sources for logos used in this project and provides guidelines for proper usage.

## ⚠️ IMPORTANT: Never Create Custom Logo SVGs

**ALWAYS use official logos from authorized sources. NEVER create custom SVG versions of brand logos.**

## Claude AI Logo

### Official Sources
1. **Brandfetch (Recommended)** - https://brandfetch.com/claude.ai
   - Dark theme logo: `https://cdn.brandfetch.io/idW5s392j1/theme/dark/logo.svg`
   - Light theme logo: `https://cdn.brandfetch.io/idW5s392j1/theme/light/logo.svg`
   - Multiple formats: SVG, PNG, WebP

2. **Wikimedia Commons** - https://commons.wikimedia.org/wiki/File:Claude_AI_logo.svg
   - Official trademark files
   - Public domain usage information

3. **LobeHub** - https://lobehub.com/icons/claude
   - Free AI/LLM model icon set
   - SVG, PNG, and vector formats

### Current Usage
- **File**: `/public/logos/claude-ai-logo.svg`
- **Used in**: `src/components/HackathonSection.tsx` (line 13)
- **Dimensions**: 160x80 pixels
- **Purpose**: Claude Hackathon Northumbria University section logo slider

### Brand Guidelines
- **Colors**: Use official Claude brand colors (#D97757 accent color)
- **Proportions**: Maintain original aspect ratio - never stretch or skew
- **Background**: Designed for light or neutral backgrounds
- **Spacing**: Allow adequate padding around the logo
- **Usage**: For official Claude AI representation only

## Anthropic Logo

### Current Usage
- **File**: `/public/logos/anthropic-seeklogo.svg`
- **Used in**: `src/components/Hero.tsx` (line 16)
- **Purpose**: Hero section "Experience liftoff" slider

## Northumbria University Logo

### Current Usage
- **File**: `/public/logos/northumbria-logo.png`
- **Used in**: Both Hero and HackathonSection components
- **Purpose**: University partnership representation

## Download Process

### For Future Logo Updates:

1. **Always check official brand sources first**:
   - Company's official brand/media kit
   - Authorized third-party brand asset providers
   - Wikimedia Commons for trademark files

2. **Download procedure**:
   ```bash
   # Example for Claude logo from Brandfetch
   curl -o public/logos/claude-ai-logo.svg "https://cdn.brandfetch.io/idW5s392j1/theme/dark/logo.svg"
   ```

3. **Verify the download**:
   - Check file integrity
   - Ensure it's a proper SVG/image file
   - Test display in the application

4. **Update documentation**:
   - Record the source URL
   - Note any usage restrictions
   - Update this file with changes

## License and Trademark Information

- **Claude**: Trademark of Anthropic PBC
- **Anthropic**: Trademark of Anthropic PBC
- **Northumbria University**: Trademark of Northumbria University

### Usage Rights
- These logos are used for identification and reference purposes
- Not for commercial use without proper authorization
- Educational/academic use may be permitted under fair use
- For commercial use, contact the trademark owners

## Troubleshooting

### If Logo Downloads Fail:
1. Try alternative official sources listed above
2. Check for updated URLs on the brand's official website
3. Use browser download if curl fails
4. Verify file format and integrity after download

### Never Do:
- ❌ Create custom SVG versions of brand logos
- ❌ Modify official logos (colors, proportions, text)
- ❌ Use low-quality or unofficial versions
- ❌ Assume any logo from Google Images is official

### Always Do:
- ✅ Use official sources documented above
- ✅ Maintain original proportions and colors
- ✅ Document the source and date of download
- ✅ Verify logo integrity before using