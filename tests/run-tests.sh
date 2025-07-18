#!/bin/bash

# Test Runner Script für A1 Vokabeltrainer
# Verwendung: ./tests/run-tests.sh [option]

set -e

# Farben für Output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Funktionen
print_header() {
    echo -e "${BLUE}================================${NC}"
    echo -e "${BLUE}$1${NC}"
    echo -e "${BLUE}================================${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Hauptfunktion
run_tests() {
    local option=${1:-"all"}
    
    case $option in
        "unit")
            print_header "Running Unit Tests"
            npm run test tests/unit/
            ;;
        "integration")
            print_header "Running Integration Tests"
            npm run test tests/integration/
            ;;
        "services")
            print_header "Running Service Tests"
            npm run test tests/unit/services/
            ;;
        "utils")
            print_header "Running Utils Tests"
            npm run test tests/unit/utils/
            ;;
        "auth")
            print_header "Running Auth Tests"
            npm run test tests/integration/auth/
            ;;
        "coverage")
            print_header "Running Tests with Coverage"
            npm run test:coverage
            ;;
        "watch")
            print_header "Running Tests in Watch Mode"
            npm run test -- --watch
            ;;
        "ui")
            print_header "Opening Test UI"
            npm run test:ui
            ;;
        "all"|*)
            print_header "Running All Tests"
            npm run test
            ;;
    esac
}

# Prüfe ob npm verfügbar ist
if ! command -v npm &> /dev/null; then
    print_error "npm ist nicht installiert oder nicht verfügbar"
    exit 1
fi

# Prüfe ob wir im richtigen Verzeichnis sind
if [ ! -f "package.json" ]; then
    print_error "package.json nicht gefunden. Bitte führe das Script im Projektroot aus."
    exit 1
fi

# Prüfe ob Vitest installiert ist
if ! npm list vitest &> /dev/null; then
    print_warning "Vitest nicht gefunden. Installiere Dependencies..."
    npm install
fi

# Führe Tests aus
run_tests "$1"

print_success "Tests abgeschlossen!" 