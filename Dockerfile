FROM php:8.2-apache

# Install dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev \
    zip \
    unzip \
    && docker-php-ext-install zip pdo_mysql

# Enable Apache modules
RUN a2enmod rewrite

# Configure Apache to use port 8080 instead of 80
RUN sed -i 's/Listen 80/Listen 8080/g' /etc/apache2/ports.conf \
    && sed -i 's/<VirtualHost \*:80>/<VirtualHost *:8080>/g' /etc/apache2/sites-available/000-default.conf

# Create a custom Apache configuration file
RUN echo 'ServerName localhost' > /etc/apache2/conf-available/custom.conf \
    && echo 'PidFile /tmp/apache2.pid' >> /etc/apache2/conf-available/custom.conf \
    && echo 'Mutex file:/tmp default' >> /etc/apache2/conf-available/custom.conf \
    && a2enconf custom

# Set the working directory
WORKDIR /var/www/html

# Copy website files
COPY website/ /var/www/html/

# Create custom directories for Apache with proper permissions
RUN mkdir -p /tmp/apache2-runtime \
    && chown -R www-data:www-data /tmp/apache2-runtime \
    && chmod -R 777 /tmp/apache2-runtime \
    && chmod -R 777 /tmp

# Set permissions
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html

# Apache now serves on port 8080
EXPOSE 8080

# Start Apache server with proper permissions
CMD ["apache2-foreground"]
