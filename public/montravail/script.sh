#!/bin/bash
i=1
for f in *.jpeg; do
  mv "$f" "img$i.jpeg"
  i=$((i+1))
done
