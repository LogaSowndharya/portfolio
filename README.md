# Django Portfolio - Loga Sowndharya K

A professional portfolio website built with Django showcasing Python full-stack development skills, projects, and certifications.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dynamic Content**: Admin panel for managing projects, skills, and certificates
- **Contact Form**: Functional contact form with database storage
- **Modern UI**: Dark theme with gradient accents and smooth animations
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Tech Stack

- **Backend**: Django 4.2.7
- **Frontend**: HTML5, CSS3, JavaScript, Tailwind CSS
- **Database**: SQLite (development) / PostgreSQL (production)
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## Quick Start

### 1. Clone or Download the Project
```bash
# If you have git
git clone <repository-url>
cd django-portfolio

# Or extract the downloaded ZIP file
```

### 2. Create Virtual Environment
```bash
# Windows
python -m venv portfolio_env
portfolio_env\Scripts\activate

# macOS/Linux
python3 -m venv portfolio_env
source portfolio_env/bin/activate
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Environment Setup
```bash
# Copy the example environment file
cp .env.example .env

# Edit .env file with your settings (optional for development)
```

### 5. Database Setup
```bash
# Run migrations
python manage.py migrate

# Create superuser for admin access
python manage.py createsuperuser

# Setup initial portfolio data
python manage.py setup_portfolio
```

### 6. Add Your Files
Place these files in the appropriate directories:
- `static/images/profile.jpg` - Your profile photo
- `static/documents/Resume.pdf` - Your resume
- `static/documents/python.pdf` - Python certificate
- `static/documents/web design.pdf` - Web design certificate

### 7. Run the Development Server
```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/` to view your portfolio!

## Admin Panel

Access the admin panel at `http://127.0.0.1:8000/admin/` to:
- Manage projects, skills, and certificates
- View contact form submissions
- Update content dynamically

## Customization

### Adding New Projects
1. Go to Admin Panel → Projects → Add Project
2. Fill in the details including technologies (comma-separated)
3. Set GitHub/demo URLs and choose icon/color classes

### Managing Skills
1. Go to Admin Panel → Skills → Add Skill
2. Choose category and add skill name
3. Use order field to control display sequence

### Updating Certificates
1. Go to Admin Panel → Certificates → Add Certificate
2. Add file path relative to static directory
3. Choose appropriate icon and color classes

## File Structure
```
django-portfolio/
├── portfolio/              # Django project settings
├── main/                   # Main application
│   ├── models.py          # Database models
│   ├── views.py           # View functions
│   ├── forms.py           # Django forms
│   ├── admin.py           # Admin configuration
│   └── management/        # Custom commands
├── templates/             # HTML templates
├── static/               # Static files
│   ├── css/              # Custom CSS
│   ├── js/               # JavaScript files
│   ├── images/           # Images
│   └── documents/        # PDF files
├── requirements.txt      # Python dependencies
└── manage.py            # Django management script
```

## Deployment

### For Production:
1. Set `DEBUG=False` in `.env`
2. Add your domain to `ALLOWED_HOSTS`
3. Configure PostgreSQL database
4. Set up static file serving
5. Use a proper web server (nginx + gunicorn)

### Static Files:
```bash
python manage.py collectstatic
```

## Contact Form

The contact form automatically:
- Saves submissions to the database
- Shows success/error messages
- Validates email format
- Can be extended to send email notifications

## Troubleshooting

### Common Issues:
1. **Static files not loading**: Run `python manage.py collectstatic`
2. **Database errors**: Run `python manage.py migrate`
3. **Missing files**: Ensure all required files are in `static/` directories
4. **Permission errors**: Check file permissions on uploaded documents

### Getting Help:
- Check Django documentation: https://docs.djangoproject.com/
- Verify all dependencies are installed
- Ensure virtual environment is activated

## License

This project is open source and available under the MIT License.