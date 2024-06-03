import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'


// function emptySourcemapFix() {
//   let currentInterval: number | null | undefined = null
//   return {
//     name: 'empty-sourcemap-fix',
//     enforce: 'post',
//     transform(source) {
//       if (currentInterval) return
//       currentInterval = setInterval(() => {
//         const nodeModulesPath = path.join(__dirname, 'node_modules', '.vite', 'deps')
//         if (!fs.existsSync(nodeModulesPath)) return
//         clearInterval(currentInterval)
//         currentInterval = null
//         const files = fs.readdirSync(nodeModulesPath)
//         files.forEach(file => {
//           const mapFile = file + '.map'
//           const mapPath = path.join(nodeModulesPath, mapFile)
//           if (!fs.existsSync(mapPath)) return
//           let mapData = JSON.parse(fs.readFileSync(mapPath, 'utf8'))
//           if (!mapData.sources || mapData.sources.length == 0) {
//             mapData.sources = [path.relative(mapPath, path.join(nodeModulesPath, file))]
//             fs.writeFileSync(mapPath, JSON.stringify(mapData), 'utf8')
//           }
//         })
//       }, 100)
//       return source
//     }
//   }
// }


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: true,
  },
})
