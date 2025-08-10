-- Insert default categories
INSERT INTO categories (id, name, description, icon_url) VALUES
    (uuid_generate_v4(), 'Photography', 'Professional wedding photography services', '/icons/camera.svg'),
    (uuid_generate_v4(), 'Videography', 'Wedding videography and cinematography', '/icons/video.svg'),
    (uuid_generate_v4(), 'Catering', 'Wedding catering and food services', '/icons/utensils.svg'),
    (uuid_generate_v4(), 'Flowers & Decor', 'Floral arrangements and wedding decorations', '/icons/flower.svg'),
    (uuid_generate_v4(), 'Music & Entertainment', 'DJs, bands, and entertainment services', '/icons/music.svg'),
    (uuid_generate_v4(), 'Venues', 'Wedding venues and reception halls', '/icons/building.svg'),
    (uuid_generate_v4(), 'Transportation', 'Wedding transportation services', '/icons/car.svg'),
    (uuid_generate_v4(), 'Wedding Cakes', 'Custom wedding cakes and desserts', '/icons/cake.svg'),
    (uuid_generate_v4(), 'Hair & Makeup', 'Bridal hair and makeup services', '/icons/makeup.svg'),
    (uuid_generate_v4(), 'Wedding Planning', 'Professional wedding planning services', '/icons/calendar.svg');

-- Create admin user
INSERT INTO users (id, email, password_hash, first_name, last_name, role, email_verified) VALUES
    (uuid_generate_v4(), 'admin@memosheria.com', crypt('admin123', gen_salt('bf')), 'Admin', 'User', 'admin', true);

-- Insert sample users
INSERT INTO users (id, email, password_hash, first_name, last_name, phone, email_verified) VALUES
    (uuid_generate_v4(), 'john.doe@example.com', crypt('password123', gen_salt('bf')), 'John', 'Doe', '+1-555-0101', true),
    (uuid_generate_v4(), 'jane.smith@example.com', crypt('password123', gen_salt('bf')), 'Jane', 'Smith', '+1-555-0102', true),
    (uuid_generate_v4(), 'mike.johnson@example.com', crypt('password123', gen_salt('bf')), 'Mike', 'Johnson', '+1-555-0103', true);

-- Insert sample vendor users
INSERT INTO users (id, email, password_hash, first_name, last_name, role, phone, email_verified) VALUES
    (uuid_generate_v4(), 'photographer@example.com', crypt('vendor123', gen_salt('bf')), 'Sarah', 'Wilson', 'vendor', '+1-555-0201', true),
    (uuid_generate_v4(), 'caterer@example.com', crypt('vendor123', gen_salt('bf')), 'David', 'Brown', 'vendor', '+1-555-0202', true),
    (uuid_generate_v4(), 'florist@example.com', crypt('vendor123', gen_salt('bf')), 'Emily', 'Davis', 'vendor', '+1-555-0203', true),
    (uuid_generate_v4(), 'dj@example.com', crypt('vendor123', gen_salt('bf')), 'Michael', 'Taylor', 'vendor', '+1-555-0204', true),
    (uuid_generate_v4(), 'venue@example.com', crypt('vendor123', gen_salt('bf')), 'Lisa', 'Anderson', 'vendor', '+1-555-0205', true);

-- Insert sample vendors
WITH vendor_users AS (
    SELECT id, first_name, last_name FROM users WHERE role = 'vendor'
),
photography_category AS (
    SELECT id FROM categories WHERE name = 'Photography'
),
catering_category AS (
    SELECT id FROM categories WHERE name = 'Catering'
),
flowers_category AS (
    SELECT id FROM categories WHERE name = 'Flowers & Decor'
),
music_category AS (
    SELECT id FROM categories WHERE name = 'Music & Entertainment'
),
venues_category AS (
    SELECT id FROM categories WHERE name = 'Venues'
)
INSERT INTO vendors (id, user_id, business_name, description, website, address, city, state, zip_code, phone, years_experience, specialties, cover_image_url, portfolio_images, status, rating, review_count) 
SELECT 
    uuid_generate_v4(),
    vu.id,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN 'Elegant Moments Photography'
        WHEN vu.first_name = 'David' THEN 'Gourmet Wedding Catering'
        WHEN vu.first_name = 'Emily' THEN 'Bloom & Blossom Florals'
        WHEN vu.first_name = 'Michael' THEN 'Rhythm & Beats Entertainment'
        WHEN vu.first_name = 'Lisa' THEN 'Grand Ballroom Venues'
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN 'Professional wedding photography capturing your special moments with artistic flair and attention to detail.'
        WHEN vu.first_name = 'David' THEN 'Exquisite catering services featuring locally sourced ingredients and customizable menus for your perfect day.'
        WHEN vu.first_name = 'Emily' THEN 'Beautiful floral arrangements and wedding decorations that bring your vision to life.'
        WHEN vu.first_name = 'Michael' THEN 'Professional DJ and entertainment services to keep your guests dancing all night long.'
        WHEN vu.first_name = 'Lisa' THEN 'Elegant wedding venues with full-service event coordination and stunning backdrops.'
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN 'https://elegantmoments.com'
        WHEN vu.first_name = 'David' THEN 'https://gourmetweddingcatering.com'
        WHEN vu.first_name = 'Emily' THEN 'https://bloomandblossom.com'
        WHEN vu.first_name = 'Michael' THEN 'https://rhythmandbeats.com'
        WHEN vu.first_name = 'Lisa' THEN 'https://grandballroom.com'
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN '123 Photography Lane'
        WHEN vu.first_name = 'David' THEN '456 Catering Street'
        WHEN vu.first_name = 'Emily' THEN '789 Flower Avenue'
        WHEN vu.first_name = 'Michael' THEN '321 Music Boulevard'
        WHEN vu.first_name = 'Lisa' THEN '654 Venue Drive'
    END,
    'New York',
    'NY',
    '10001',
    CASE 
        WHEN vu.first_name = 'Sarah' THEN '+1-555-0301'
        WHEN vu.first_name = 'David' THEN '+1-555-0302'
        WHEN vu.first_name = 'Emily' THEN '+1-555-0303'
        WHEN vu.first_name = 'Michael' THEN '+1-555-0304'
        WHEN vu.first_name = 'Lisa' THEN '+1-555-0305'
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN 8
        WHEN vu.first_name = 'David' THEN 12
        WHEN vu.first_name = 'Emily' THEN 6
        WHEN vu.first_name = 'Michael' THEN 10
        WHEN vu.first_name = 'Lisa' THEN 15
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN ARRAY['wedding', 'portrait', 'engagement']
        WHEN vu.first_name = 'David' THEN ARRAY['wedding', 'corporate', 'private']
        WHEN vu.first_name = 'Emily' THEN ARRAY['wedding', 'bridal', 'centerpieces']
        WHEN vu.first_name = 'Michael' THEN ARRAY['wedding', 'corporate', 'private']
        WHEN vu.first_name = 'Lisa' THEN ARRAY['wedding', 'reception', 'ceremony']
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN '/vendor-cover-photo.jpg'
        WHEN vu.first_name = 'David' THEN '/vendor-cover-catering.jpg'
        WHEN vu.first_name = 'Emily' THEN '/vendor-cover-floral.jpg'
        WHEN vu.first_name = 'Michael' THEN '/vendor-cover-music.jpg'
        WHEN vu.first_name = 'Lisa' THEN '/vendor-cover-venue.jpg'
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN ARRAY['/portfolio-1.jpg', '/portfolio-2.jpg', '/wedding-photo-1.jpg']
        WHEN vu.first_name = 'David' THEN ARRAY['/catering-1.jpg', '/catering-2.jpg', '/catering-3.jpg']
        WHEN vu.first_name = 'Emily' THEN ARRAY['/floral-1.jpg', '/floral-2.jpg', '/floral-3.jpg']
        WHEN vu.first_name = 'Michael' THEN ARRAY['/music-1.jpg', '/music-2.jpg', '/music-3.jpg']
        WHEN vu.first_name = 'Lisa' THEN ARRAY['/venue-1.jpg', '/venue-2.jpg', '/venue-3.jpg']
    END,
    'approved',
    CASE 
        WHEN vu.first_name = 'Sarah' THEN 4.8
        WHEN vu.first_name = 'David' THEN 4.9
        WHEN vu.first_name = 'Emily' THEN 4.7
        WHEN vu.first_name = 'Michael' THEN 4.6
        WHEN vu.first_name = 'Lisa' THEN 4.9
    END,
    CASE 
        WHEN vu.first_name = 'Sarah' THEN 24
        WHEN vu.first_name = 'David' THEN 31
        WHEN vu.first_name = 'Emily' THEN 18
        WHEN vu.first_name = 'Michael' THEN 22
        WHEN vu.first_name = 'Lisa' THEN 28
    END
FROM vendor_users vu;

-- Insert sample packages
WITH vendors_with_categories AS (
    SELECT 
        v.id as vendor_id,
        v.business_name,
        c.id as category_id,
        c.name as category_name
    FROM vendors v
    JOIN users u ON v.user_id = u.id
    JOIN categories c ON (
        (u.first_name = 'Sarah' AND c.name = 'Photography') OR
        (u.first_name = 'David' AND c.name = 'Catering') OR
        (u.first_name = 'Emily' AND c.name = 'Flowers & Decor') OR
        (u.first_name = 'Michael' AND c.name = 'Music & Entertainment') OR
        (u.first_name = 'Lisa' AND c.name = 'Venues')
    )
)
INSERT INTO packages (id, vendor_id, category_id, name, description, price, duration_hours, max_guests, includes, images, is_featured)
SELECT 
    uuid_generate_v4(),
    vwc.vendor_id,
    vwc.category_id,
    CASE 
        WHEN vwc.category_name = 'Photography' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 
            THEN 'Basic Wedding Photography'
        WHEN vwc.category_name = 'Photography' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 2 
            THEN 'Premium Wedding Photography'
        WHEN vwc.category_name = 'Catering' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 
            THEN 'Elegant Wedding Catering'
        WHEN vwc.category_name = 'Catering' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 2 
            THEN 'Gourmet Wedding Feast'
        WHEN vwc.category_name = 'Flowers & Decor' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 
            THEN 'Romantic Floral Package'
        WHEN vwc.category_name = 'Flowers & Decor' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 2 
            THEN 'Luxury Floral Design'
        WHEN vwc.category_name = 'Music & Entertainment' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 
            THEN 'Wedding DJ Package'
        WHEN vwc.category_name = 'Music & Entertainment' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 2 
            THEN 'Premium Entertainment'
        WHEN vwc.category_name = 'Venues' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 
            THEN 'Garden Wedding Venue'
        ELSE 'Ballroom Wedding Package'
    END,
    CASE 
        WHEN vwc.category_name = 'Photography' 
            THEN 'Professional wedding photography with edited high-resolution images and online gallery.'
        WHEN vwc.category_name = 'Catering' 
            THEN 'Delicious wedding catering with customizable menu options and professional service.'
        WHEN vwc.category_name = 'Flowers & Decor' 
            THEN 'Beautiful floral arrangements including bridal bouquet, centerpieces, and ceremony decor.'
        WHEN vwc.category_name = 'Music & Entertainment' 
            THEN 'Professional DJ services with sound system, lighting, and music for ceremony and reception.'
        ELSE 'Elegant wedding venue with full setup, tables, chairs, and basic lighting.'
    END,
    CASE 
        WHEN vwc.category_name = 'Photography' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 1500.00
        WHEN vwc.category_name = 'Photography' THEN 2500.00
        WHEN vwc.category_name = 'Catering' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 3500.00
        WHEN vwc.category_name = 'Catering' THEN 5500.00
        WHEN vwc.category_name = 'Flowers & Decor' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 800.00
        WHEN vwc.category_name = 'Flowers & Decor' THEN 1500.00
        WHEN vwc.category_name = 'Music & Entertainment' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 1200.00
        WHEN vwc.category_name = 'Music & Entertainment' THEN 2000.00
        WHEN vwc.category_name = 'Venues' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 4000.00
        ELSE 6500.00
    END,
    CASE 
        WHEN vwc.category_name = 'Photography' THEN 8
        WHEN vwc.category_name = 'Catering' THEN 6
        WHEN vwc.category_name = 'Flowers & Decor' THEN 4
        WHEN vwc.category_name = 'Music & Entertainment' THEN 8
        ELSE 12
    END,
    CASE 
        WHEN vwc.category_name = 'Photography' THEN 150
        WHEN vwc.category_name = 'Catering' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 100
        WHEN vwc.category_name = 'Catering' THEN 200
        WHEN vwc.category_name = 'Flowers & Decor' THEN 150
        WHEN vwc.category_name = 'Music & Entertainment' THEN 200
        WHEN vwc.category_name = 'Venues' AND row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1 THEN 120
        ELSE 250
    END,
    CASE 
        WHEN vwc.category_name = 'Photography' 
            THEN ARRAY['Pre-wedding consultation', '8 hours coverage', 'Edited high-res photos', 'Online gallery', 'USB drive']
        WHEN vwc.category_name = 'Catering' 
            THEN ARRAY['Menu tasting', 'Professional service staff', 'Table setup', 'Cleanup service', 'Dietary accommodations']
        WHEN vwc.category_name = 'Flowers & Decor' 
            THEN ARRAY['Bridal bouquet', 'Bridesmaids bouquets', 'Centerpieces', 'Ceremony arch', 'Boutonnières']
        WHEN vwc.category_name = 'Music & Entertainment' 
            THEN ARRAY['Professional DJ', 'Sound system', 'Wireless microphones', 'Dance lighting', 'Music requests']
        ELSE ARRAY['Venue rental', 'Tables and chairs', 'Basic lighting', 'Bridal suite', 'Parking']
    END,
    CASE 
        WHEN vwc.category_name = 'Photography' 
            THEN ARRAY['/wedding-photo-premium.jpg', '/basic-wedding-photo.png']
        WHEN vwc.category_name = 'Catering' 
            THEN ARRAY['/wedding-catering-gourmet.jpg', '/wedding-catering-1.jpg']
        WHEN vwc.category_name = 'Flowers & Decor' 
            THEN ARRAY['/wedding-flowers-elegant.jpg', '/floral-1.jpg']
        WHEN vwc.category_name = 'Music & Entertainment' 
            THEN ARRAY['/wedding-music-band.jpg', '/music-1.jpg']
        ELSE ARRAY['/wedding-venue-garden.jpg', '/venue-1.jpg']
    END,
    row_number() OVER (PARTITION BY vwc.vendor_id ORDER BY random()) = 1
FROM vendors_with_categories vwc,
     generate_series(1, 2) as series;

-- Insert sample gallery items
INSERT INTO galleries (id, title, description, category, style, season, images, tags, is_featured, view_count) VALUES
    (uuid_generate_v4(), 'Rustic Garden Wedding', 'Beautiful outdoor wedding with rustic charm and natural elements', 'outdoor', 'rustic', 'spring', 
     ARRAY['/inspiration-rustic-garden.jpg', '/wedding-venue-garden.jpg', '/floral-1.jpg'], 
     ARRAY['rustic', 'garden', 'outdoor', 'spring'], true, 245),
    (uuid_generate_v4(), 'Elegant Ballroom Celebration', 'Sophisticated indoor wedding with classic elegance', 'indoor', 'elegant', 'winter', 
     ARRAY['/inspiration-elegant-ballroom.jpg', '/venue-2.jpg', '/elegant-bride.png'], 
     ARRAY['elegant', 'ballroom', 'indoor', 'classic'], true, 189),
    (uuid_generate_v4(), 'Boho Beach Wedding', 'Relaxed beachside ceremony with bohemian flair', 'beach', 'boho', 'summer', 
     ARRAY['/inspiration-boho-beach.jpg', '/couple-1.jpg', '/floral-2.jpg'], 
     ARRAY['boho', 'beach', 'outdoor', 'summer'], false, 156),
    (uuid_generate_v4(), 'Vintage Barn Wedding', 'Charming barn wedding with vintage decorations', 'barn', 'vintage', 'fall', 
     ARRAY['/inspiration-vintage-barn.jpg', '/venue-3.jpg', '/floral-3.jpg'], 
     ARRAY['vintage', 'barn', 'rustic', 'fall'], true, 203),
    (uuid_generate_v4(), 'Intimate Backyard Wedding', 'Cozy backyard celebration with family and friends', 'backyard', 'intimate', 'summer', 
     ARRAY['/inspiration-backyard-intimate.jpg', '/couple-2.jpg', '/catering-2.jpg'], 
     ARRAY['intimate', 'backyard', 'small', 'summer'], false, 134);

-- Create some sample bookings
WITH sample_users AS (
    SELECT id FROM users WHERE role = 'user' LIMIT 3
),
sample_packages AS (
    SELECT p.id, p.vendor_id, p.price FROM packages p 
    JOIN vendors v ON p.vendor_id = v.id 
    WHERE v.status = 'approved' 
    LIMIT 5
)
INSERT INTO bookings (id, user_id, vendor_id, package_id, event_date, event_time, guest_count, venue_address, special_requests, total_amount, deposit_amount, status, payment_status)
SELECT 
    uuid_generate_v4(),
    su.id,
    sp.vendor_id,
    sp.id,
    CURRENT_DATE + INTERVAL '3 months' + (random() * INTERVAL '6 months'),
    '15:00:00'::time,
    100 + (random() * 100)::integer,
    '123 Wedding Venue Street, New York, NY 10001',
    'Please coordinate with other vendors for setup time',
    sp.price,
    sp.price * 0.2,
    CASE (random() * 3)::integer
        WHEN 0 THEN 'pending'
        WHEN 1 THEN 'confirmed'
        ELSE 'completed'
    END,
    CASE (random() * 2)::integer
        WHEN 0 THEN 'pending'
        ELSE 'paid'
    END
FROM sample_users su
CROSS JOIN sample_packages sp
LIMIT 8;

-- Insert sample reviews for completed bookings
WITH completed_bookings AS (
    SELECT b.id, b.user_id, b.vendor_id 
    FROM bookings b 
    WHERE b.status = 'completed' 
    LIMIT 5
)
INSERT INTO reviews (id, booking_id, user_id, vendor_id, rating, comment, is_verified)
SELECT 
    uuid_generate_v4(),
    cb.id,
    cb.user_id,
    cb.vendor_id,
    4 + (random())::integer, -- Rating between 4-5
    CASE (random() * 4)::integer
        WHEN 0 THEN 'Absolutely amazing service! Exceeded all our expectations.'
        WHEN 1 THEN 'Professional, reliable, and delivered exactly what we wanted.'
        WHEN 2 THEN 'Great communication throughout the process. Highly recommend!'
        ELSE 'Perfect for our special day. Thank you for making it memorable!'
    END,
    true
FROM completed_bookings cb;

-- Insert sample notifications
WITH all_users AS (
    SELECT id FROM users WHERE role IN ('user', 'vendor')
)
INSERT INTO notifications (id, user_id, type, title, message, is_read)
SELECT 
    uuid_generate_v4(),
    au.id,
    CASE (random() * 4)::integer
        WHEN 0 THEN 'booking_request'
        WHEN 1 THEN 'booking_confirmed'
        WHEN 2 THEN 'payment_received'
        ELSE 'system_update'
    END,
    CASE (random() * 4)::integer
        WHEN 0 THEN 'New Booking Request'
        WHEN 1 THEN 'Booking Confirmed'
        WHEN 2 THEN 'Payment Received'
        ELSE 'System Update'
    END,
    CASE (random() * 4)::integer
        WHEN 0 THEN 'You have received a new booking request for your services.'
        WHEN 1 THEN 'Your booking has been confirmed by the vendor.'
        WHEN 2 THEN 'Payment has been successfully processed for your booking.'
        ELSE 'We have updated our terms of service. Please review the changes.'
    END,
    random() < 0.3 -- 30% chance of being read
FROM all_users au
CROSS JOIN generate_series(1, 2)
LIMIT 20;

-- Update sequences to avoid conflicts
SELECT setval(pg_get_serial_sequence('users', 'id'), (SELECT MAX(id) FROM users));
