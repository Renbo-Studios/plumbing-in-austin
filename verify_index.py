
import asyncio
import os
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto('file://' + os.path.abspath('index.html'))
        await page.screenshot(path='screenshot_index.png', full_page=True)
        await browser.close()

asyncio.run(main())
