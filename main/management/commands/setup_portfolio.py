from django.core.management.base import BaseCommand
from main.models import Project, Skill, Certificate


class Command(BaseCommand):
    help = 'Setup initial portfolio data'

    def handle(self, *args, **options):
        self.stdout.write('Setting up portfolio data...')
        
        # Create Skills
        skills_data = [
            # Programming Languages
            ('programming', 'Python'),
            ('programming', 'JavaScript'),
            ('programming', 'HTML5'),
            ('programming', 'CSS3'),
            ('programming', 'SQL'),
            ('programming', 'PHP'),
            
            # Backend Development
            ('backend', 'Django'),
            ('backend', 'MySQL'),
            ('backend', 'SQLite'),
            ('backend', 'MongoDB'),
            
            # Frontend Development
            ('frontend', 'HTML'),
            ('frontend', 'CSS'),
            ('frontend', 'JavaScript'),
            ('frontend', 'Bootstrap'),
            ('frontend', 'Responsive Design'),
            
            # Tools
            ('tools', 'Git'),
            ('tools', 'GitHub'),
            ('tools', 'VS Code'),
            ('tools', 'Linux'),
            ('tools', 'Command Line'),
            
            # ML & AI
            ('ml', 'Deep Learning'),
            ('ml', 'Artificial Intelligence'),
            ('ml', 'Data Analysis'),
            ('ml', 'Python Libraries'),
            
            # Bioinformatics
            ('bio', 'BLAST'),
            ('bio', 'PyMOL'),
            ('bio', 'Swiss-Model'),
            ('bio', 'Maestro'),
            ('bio', 'Genomics'),
            ('bio', 'Proteomics'),
            ('bio', 'Molecular Docking'),
        ]
        
        # Clear existing skills first
        Skill.objects.all().delete()
        
        for category, name in skills_data:
            skill, created = Skill.objects.get_or_create(
                category=category,
                name=name,
                defaults={'is_active': True}
            )
            if created:
                self.stdout.write(f'Created skill: {name}')
        
        # Create Projects
        projects_data = [
            {
                'title': 'Django CRUD Application',
                'description': 'A comprehensive full-stack web application built with Django featuring complete CRUD operations, user authentication, responsive design, and PostgreSQL database integration.',
                'technologies': 'Python, Django, PostgreSQL, HTML5, CSS3, JavaScript, Bootstrap',
                'github_url': 'https://github.com/logasowndharya/django-crud',
                'demo_url': '',
                'icon_class': 'fas fa-code',
                'color_class': 'from-blue-500 to-blue-600',
                'order': 1
            },
            {
                'title': 'Meal Planner Application',
                'description': 'A comprehensive meal planning web application that helps users organize their weekly meals, manage recipes, create shopping lists, and track nutritional information with an intuitive interface.',
                'technologies': 'HTML5, CSS3, JavaScript, Local Storage, Responsive Design, JSON',
                'github_url': 'https://github.com/LogaSowndharya/meal-planner',
                'demo_url': 'https://logasowndharya.github.io/meal-planner/',
                'icon_class': 'fas fa-utensils',
                'color_class': 'from-orange-500 to-orange-600',
                'order': 2
            },
            {
                'title': 'Color Flip Game',
                'description': 'An interactive color-guessing game with dynamic backgrounds, scoring system, responsive design, and engaging user experience. Features smooth animations and modern UI.',
                'technologies': 'HTML5, CSS3, JavaScript, DOM Manipulation, Responsive Design',
                'github_url': 'https://github.com/logasowndharya/colorflip',
                'demo_url': 'https://logasowndharya.github.io/colorflip/',
                'icon_class': 'fas fa-palette',
                'color_class': 'from-purple-500 to-purple-600',
                'order': 3
            },
            {
                'title': 'Quote Generator',
                'description': 'A dynamic web application that fetches inspirational quotes from external APIs with smooth animations, social sharing features, and modern responsive design.',
                'technologies': 'HTML5, CSS3, JavaScript, API Integration, JSON, Fetch API',
                'github_url': 'https://github.com/LogaSowndharya/quotegenerate',
                'demo_url': 'https://logasowndharya.github.io/quotegenerate/',
                'icon_class': 'fas fa-quote-left',
                'color_class': 'from-green-500 to-green-600',
                'order': 4
            },
            {
                'title': 'Vaccine Design for Omicron Variant',
                'description': 'Bioinformatics research project focusing on computational vaccine design using molecular docking techniques, protein modeling, and advanced bioinformatics tools.',
                'technologies': 'Bioinformatics, PyMOL, Swiss-Model, Molecular Docking, Python, Maestro',
                'github_url': '',
                'demo_url': '',
                'icon_class': 'fas fa-shield-virus',
                'color_class': 'from-teal-500 to-teal-600',
                'order': 5
            }
        ]
        
        for project_data in projects_data:
            project, created = Project.objects.get_or_create(
                title=project_data['title'],
                defaults=project_data
            )
            if created:
                self.stdout.write(f'Created project: {project_data["title"]}')
        
        # Create Certificates - Updated with categories
        certificates_data = [
            # Co-curricular certificates
            {
                'title': 'Programming in Python',
                'description': 'Comprehensive certification in Python programming covering fundamentals, object-oriented programming, data structures, and advanced concepts.',
                'file_path': 'documents/python.pdf',
                'icon_class': 'fas fa-code',
                'color_class': 'from-blue-500 to-blue-600',
                'order': 1,
                'category': 'co-curricular'
            },
            {
                'title': 'Front End Web Development',
                'description': 'Complete certification in modern frontend development including HTML5, CSS3, JavaScript, responsive design, and modern frameworks.',
                'file_path': 'documents/webdesign.pdf',
                'icon_class': 'fas fa-globe',
                'color_class': 'from-purple-500 to-purple-600',
                'order': 2,
                'category': 'co-curricular'
            },
            {
                'title': 'Applied Deep Learning & AI in Bioinformatics',
                'description': 'Specialized workshop certification from IIT Madras focusing on artificial intelligence applications in biological sciences and research.',
                'file_path': 'documents/workshop iit.pdf',
                'icon_class': 'fas fa-award',
                'color_class': 'from-green-500 to-green-600',
                'order': 3,
                'category': 'co-curricular'
            },
            {
                'title': '3D Bioprinting',
                'description': 'Advanced certification in 3D bioprinting techniques, covering tissue engineering, biomaterials, and applications in regenerative medicine.',
                'file_path': 'documents/3d bioprinting.pdf',
                'icon_class': 'fas fa-dna',
                'color_class': 'from-teal-500 to-teal-600',
                'order': 4,
                'category': 'co-curricular'
            },
            
            # Extra-curricular certificates
            {
                'title': 'Professional Resume',
                'description': 'Complete professional resume highlighting education, technical skills, projects, certifications, and career objectives in full-stack development.',
                'file_path': 'documents/resume.pdf',
                'icon_class': 'fas fa-file-alt',
                'color_class': 'from-orange-500 to-orange-600',
                'order': 1,
                'category': 'extra-curricular'
            }
        ]
        
        # Add category field to Certificate model if it doesn't exist
        from django.db import connection
        cursor = connection.cursor()
        try:
            cursor.execute("SELECT * FROM information_schema.columns WHERE table_name='main_certificate' AND column_name='category'")
            if not cursor.fetchone():
                cursor.execute("ALTER TABLE main_certificate ADD COLUMN category varchar(50) DEFAULT 'co-curricular'")
                self.stdout.write("Added category field to Certificate model")
        except Exception as e:
            self.stdout.write(f"Error checking/adding category field: {e}")
        
        for cert_data in certificates_data:
            certificate, created = Certificate.objects.get_or_create(
                title=cert_data['title'],
                defaults=cert_data
            )
            if not created:
                # Update the category if the certificate already exists
                certificate.category = cert_data['category']
                certificate.save()
                self.stdout.write(f'Updated certificate category: {cert_data["title"]}')
            else:
                self.stdout.write(f'Created certificate: {cert_data["title"]}')
        
        self.stdout.write(self.style.SUCCESS('Portfolio data setup completed!'))