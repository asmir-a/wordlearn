from bs4 import BeautifulSoup
import json


def extract_word(word_row):
    cols = word_row.find_all("td")
    return cols[1].p.text.replace("\xa0", "")

def main():
    with open("./korean-words.html") as html_file:
        doc = html_file.read()
        doc_soup = BeautifulSoup(doc, "html.parser")
        word_rows = doc_soup.find_all("tr")
        korean_words = list(map(extract_word, word_rows))
        korean_words_json = json.dumps(korean_words, ensure_ascii=False)
        with open("./korean-words.json", "w", encoding="utf-8") as json_file:
            json_file.write(korean_words_json)


if __name__ == "__main__":
    main()







