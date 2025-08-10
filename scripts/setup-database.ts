import { supabaseAdmin } from "../lib/supabase"
import fs from "fs"
import path from "path"

async function setupDatabase() {
  try {
    console.log("🚀 Starting database setup...")

    // Read and execute schema creation script
    const schemaPath = path.join(process.cwd(), "scripts", "01-create-database-schema.sql")
    const schemaSQL = fs.readFileSync(schemaPath, "utf8")

    console.log("📋 Creating database schema...")
    const { error: schemaError } = await supabaseAdmin.rpc("exec_sql", {
      sql: schemaSQL,
    })

    if (schemaError) {
      console.error("❌ Error creating schema:", schemaError)
      return
    }

    console.log("✅ Database schema created successfully")

    // Read and execute seed data script
    const seedPath = path.join(process.cwd(), "scripts", "02-seed-initial-data.sql")
    const seedSQL = fs.readFileSync(seedPath, "utf8")

    console.log("🌱 Seeding initial data...")
    const { error: seedError } = await supabaseAdmin.rpc("exec_sql", {
      sql: seedSQL,
    })

    if (seedError) {
      console.error("❌ Error seeding data:", seedError)
      return
    }

    console.log("✅ Initial data seeded successfully")

    // Verify setup by checking if tables exist
    const { data: tables, error: tablesError } = await supabaseAdmin
      .from("information_schema.tables")
      .select("table_name")
      .eq("table_schema", "public")

    if (tablesError) {
      console.error("❌ Error verifying setup:", tablesError)
      return
    }

    console.log("📊 Database tables created:")
    tables?.forEach((table) => {
      console.log(`  - ${table.table_name}`)
    })

    console.log("🎉 Database setup completed successfully!")
    console.log("\n📝 Next steps:")
    console.log("1. Update your .env.local file with your Supabase credentials")
    console.log("2. Run: npm run dev")
    console.log("3. Test the API endpoints using the documentation")
  } catch (error) {
    console.error("💥 Setup failed:", error)
  }
}

// Run the setup if this file is executed directly
if (require.main === module) {
  setupDatabase()
}

export default setupDatabase
