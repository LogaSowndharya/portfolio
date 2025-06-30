# Documents Directory

Please add your PDF files here:

1. **Resume.pdf** - Your professional resume
2. **python.pdf** - Your Python programming certificate  
3. **web design.pdf** - Your web design certificate

## How to Add Files:

1. Copy your PDF files to this `static/documents/` directory
2. Make sure the filenames match exactly:
   - `Resume.pdf`
   - `python.pdf` 
   - `web design.pdf`

The portfolio will automatically link to these files for viewing and downloading.

## File Requirements:

- **Format**: PDF files only
- **Size**: Recommended under 5MB each for faster loading
- **Naming**: Use exact filenames as specified above (case-sensitive)

## Testing:

After adding your files, test the links by:
1. Running the Django development server
2. Visiting the portfolio website
3. Clicking on certificate view/download buttons
4. Clicking on the resume download button

If files don't load, check:
- File names match exactly
- Files are in the correct directory
- File permissions allow reading
- Run `python manage.py collectstatic` if deploying