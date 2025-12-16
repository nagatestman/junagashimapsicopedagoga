#!/usr/bin/env python3
"""
Script para corrigir caminhos absolutos no HTML estático para caminhos relativos
"""

import os
import re
import glob

def fix_html_paths(file_path):
    """Corrige caminhos no arquivo HTML"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Substituições para tornar caminhos relativos
    replacements = [
        (r'href="/_next/', r'href="./_next/'),
        (r'src="/_next/', r'src="./_next/'),
        (r'href="/images/', r'href="./images/'),
        (r'src="/images/', r'src="./images/'),
        (r'href="/favicon', r'href="./favicon'),
        (r'href="/apple-touch-icon', r'href="./apple-touch-icon'),
        (r'href="/sobre"', r'href="./sobre/"'),
        (r'href="/area-atendimento"', r'href="./area-atendimento/"'),
        (r'href="/"', r'href="./"'),
    ]
    
    # Aplicar todas as substituições
    for old_pattern, new_pattern in replacements:
        content = re.sub(old_pattern, new_pattern, content)
    
    # Escrever arquivo corrigido
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Corrigido: {file_path}")

def main():
    """Função principal"""
    print("🔧 Corrigindo caminhos nos arquivos HTML...")
    
    # Lista de arquivos HTML para corrigir
    html_files = [
        'index.html',
        '404.html',
        'sobre/index.html', 
        'area-atendimento/index.html'
    ]
    
    # Corrigir cada arquivo
    for html_file in html_files:
        if os.path.exists(html_file):
            fix_html_paths(html_file)
        else:
            print(f"❌ Arquivo não encontrado: {html_file}")
    
    print("\n✅ Correção de caminhos concluída!")

if __name__ == "__main__":
    main()
