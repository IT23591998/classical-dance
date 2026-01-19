# Aurora Dance Studio - Website User Manual

This website is built with Next.js and is designed to be easily updatable without touching the core code.

## 1. Updating the Class Schedule
The schedule is powered by a simple data file.

1.  Navigate to `src/data/schedule.json`.
2.  You will see a list of days, each containing a list of classes.
3.  **To Add a Class**: Copy a `{ ... }` block inside the `classes` list and change the details.
    ```json
    {
      "time": "18:00 - 19:30",
      "level": "Intermediate",
      "style": "Kathak",
      "instructor": "New Instructor"
    }
    ```
4.  **To Change a Time**: Simply edit the text inside the quotes for `"time"`.

## 2. Updating Instructor Profiles
1.  Navigate to `src/data/instructors.json`.
2.  Each instructor is a block enclosed in `{ }`.
3.  Update the `name`, `role`, `bio`, or `styles` fields.
4.  **Images**: Place new images in the `public/images/` folder and update the `"image"` path in the JSON file (e.g., `"/images/sarah.jpg"`).

## 3. Pointing the Domain (GoDaddy / Namecheap / etc.)
To launch your site:
1.  **Deploy**: Push this code to Vercel (recommended for Next.js).
    *   Create an account on [Vercel.com](https://vercel.com).
    *   Import your Git repository.
    *   Click "Deploy".
2.  **DNS Settings**:
    *   In Vercel, go to Settings > Domains.
    *   Add your domain (e.g., `auroraclassical.com`).
    *   Vercel will give you `A Records` or `CNAME` records.
    *   Log in to your domain registrar (e.g., GoDaddy) and update the DNS settings with these values.

## 4. Performance & Images
*   The site uses Next.js Image Optimization.
*   Ensure uploaded images are in `public/images/`.
*   For best performance, use `.webp` or `.jpg` formats under 500KB.
